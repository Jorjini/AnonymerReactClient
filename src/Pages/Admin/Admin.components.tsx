import { ImageMask } from "Assets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData: any = JSON.parse(localStorage.getItem('userData')!);
    const admin = userData.token.role === 'Admin';

    if (!admin) {
      navigate('/home/chat/1');
    };
  }, [navigate]);

  const handleDeclineClick = () => {

  };

  const handleAcceptClick = () => {

  };

  return (
    <main className="p-[25px]">
      <div className="flex lp:flex-row flex-col flex-wrap">

        <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md lp:ml-6 mb-10">
          <div className="max-w-[500px] max-h-[500px] overflow-hidden flex flex-row justify-center items-center">
            <img src={ImageMask} alt="" />
          </div>
          <div className="[&>ul>li]:text-white-100 mb-6">
            <ul>
              <li>firstname: </li>
              <li>lastname: </li>
            </ul>
          </div>
          <button
            type="button"
            data-mdb-ripple="true"
            onClick={handleAcceptClick}
            className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Accept
          </button>
          <button
            type="button"
            data-mdb-ripple="true"
            onClick={handleDeclineClick}
            className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Decline
          </button>
        </div>
      </div>
    </main>
  );
};

export default Admin;
