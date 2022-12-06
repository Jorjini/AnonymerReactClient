import useChangeKycStatusMutation from "Mutation/useChangeKycStatusMutation";
import useGetAllActiveQuery from "Query/useGetAllActiveQuery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IKyc, UserKycStatus } from "Types/Types";
import * as SignalR from '@microsoft/signalr';

const Admin = () => {
  const [allData, setAllData] = useState<IKyc[]>([]);
  const userData: any = JSON.parse(localStorage.getItem('userData')!);
  const admin = userData.token.role === 'Admin';

  const navigate = useNavigate();
  const getAllActive = useGetAllActiveQuery();
  const changeKycStatus = useChangeKycStatusMutation();

  useEffect(() => {

    if (!admin) {
      navigate('/home/chat/1');
    };
  }, [navigate, admin]);

  useEffect(() => {
    const req = async () => {
      const data = await getAllActive();

      if (data.statusCode === 200) setAllData([...data.kycs])
    }

    req();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeclineClick = (kycId: string) => {
    changeKycStatus({
      adminId: userData.token.userId,
      kycId,
      status: UserKycStatus.Rejected
    });
  };

  const handleAcceptClick = (kycId: string) => {
    changeKycStatus({
      adminId: userData.token.userId,
      kycId,
      status: UserKycStatus.Completed
    });
  };


  // Sockets
  // TODO: Need to pass email
  const hubConnection = new SignalR.HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_BE_SOCKET_URL}hubs/admin?email=${userData?.token?.email}`, {
      skipNegotiation: true,
      transport: SignalR.HttpTransportType.WebSockets
    })
    .build();

  hubConnection.start().then(() => {
    // hubConnection.invoke('send-message', { message: 'text is done' });
    hubConnection.on('newKyc', (e) => console.log(e, 'asdasdasd'));
  });

  return (
    <main className="p-[25px]">
      <div className="flex lp:flex-row flex-col flex-wrap">
        {allData.map((item) => (
          <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md lp:ml-6 mb-10" key={item.userId}>
            <div className="max-w-[500px] max-h-[500px] overflow-hidden flex flex-row justify-center items-center">
              <img src={item.image} alt="" />
            </div>
            <div className="[&>ul>li]:text-white-100 mb-6">
              <ul>
                <li>firstname: {item.firstName}</li>
                <li>lastname: {item.lastName}</li>
              </ul>
            </div>
            <button
              type="button"
              data-mdb-ripple="true"
              onClick={() => handleAcceptClick(item.id)}
              className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Accept
            </button>
            <button
              type="button"
              data-mdb-ripple="true"
              onClick={() => handleDeclineClick(item.id)}
              className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Decline
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Admin;
