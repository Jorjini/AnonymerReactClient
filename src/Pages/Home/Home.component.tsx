import { useEffect, useState } from "react";
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuItem from 'Components/MenuItem'
import { useGlobalContext } from 'Contexts/GlobalContext'
import { GlobalContextTypes } from 'Contexts/GlobalContext/GlobalContext.config'
import Button from 'Elements/Button'
import { ButtonVartian } from 'Elements/Button/Button.config'
import windowSize from 'Helpers/windowSize'
import { Outlet, useNavigate } from 'react-router-dom'
import useGetPublicRoomQuery from 'Query/useGetPublicRoomQuery'
import { IRoom, UserKycStatus } from "Types/Types";


const Home = () => {
  const { state, dispatch } = useGlobalContext();
  const getPublicRooms = useGetPublicRoomQuery();
  const { windowWidth } = windowSize();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const handleClick = (id: string) => {
    navigate(`/home/chat/${id}`);
    if (windowWidth <= 1200) {
      dispatch({
        type: GlobalContextTypes.SHOW_CHAT_MENU,
        payload: {
          showChatMenu: false
        }
      });
    };
  };

  const handleLogOutClick = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('userData')!);
    const userDataToken = userData?.token

    if (
      !token ||
      userDataToken?.kycStatus !== UserKycStatus.Approved ||
      !userDataToken?.emailVerified
    ) {
      navigate('/login');
    };
  }, [navigate]);



  useEffect(() => {
    const req = async () => {
      const data = await getPublicRooms();

      if (data.statusCode === 200) setRooms(data.rooms);
    }
    req();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="lp:flex flex-row justify-between container h-full w-full">
      {state?.showChatMenu && (
        <div className="lp:max-w-[500px] lp:bg-black-100 w-full lp:h-[100vh]">
          <div className="flex justify-center mt-[8px] lp:my-[100px] mb-[75px] text-[32px] text-black-100">
            <h1 className="font-[300] lp:text-white-100 title">Anonymer</h1>
          </div>
          <span className="text-[20px]">
            Chats
          </span>
          <div className="flex flex-col gap-[15px] mt-[20px] lp:px-[50px]">
            {rooms?.map((room) => (
              <Button
                key={room.id}
                variant={ButtonVartian.NONE}
                className="!rounded-[50px] "
                onClick={() => handleClick(room.id)}
              >
                <MenuItem
                  key={room.id}
                  icon=""
                  online={room.realm}
                  title={room.name}
                />
              </Button>
            ))}
            {/* <div className="flex justify-between gap-[20px]">
              <Button
                variant={ButtonVartian.PRIMARY}
                className="w-full max-h-[70px] py-[22px] !rounded-[50px]"
              >
                <span className="text-white-100 mr-[10px]">
                  Add Channel
                </span>
                <FontAwesomeIcon
                  icon={faPlus}
                  color="white"
                  className="[&>*]:fill-white-100"
                />
              </Button>
              <Button
                variant={ButtonVartian.PRIMARY}
                className="w-full max-h-[70px] py-[22px] !rounded-[50px]"
              >
                <span className="text-white-100 mr-[10px]">
                  Create Channel
                </span>
                <FontAwesomeIcon
                  icon={faPlus}
                  color="white"
                  className="[&>*]:fill-white-100"
                />
              </Button>
            </div> */}
            <Button
              variant={ButtonVartian.PRIMARY}
              onClick={handleLogOutClick}
              className="w-full max-h-[70px] py-[22px] !rounded-[50px] mt-[50px]"
            >
              Log out
            </Button>
          </div>
        </div>
      )}
      {(!state?.showChatMenu || windowWidth > 1200) && (
        <div className="w-full h-full">
          <Outlet />
        </div>
      )}
    </main>
  );
};

export default Home;
