import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuItem from 'Components/MenuItem'
import { useGlobalContext } from 'Contexts/GlobalContext'
import { GlobalContextTypes } from 'Contexts/GlobalContext/GlobalContext.config'
import Button from 'Elements/Button'
import { ButtonVartian } from 'Elements/Button/Button.config'
import windowSize from 'Helpers/windowSize'
import { Outlet, useNavigate } from 'react-router-dom'
import { menuItems } from './Home.mock'

const Home = () => {
  const { state, dispatch } = useGlobalContext();
  const { windowWidth } = windowSize();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/home/chat/${id}`);
    if (windowWidth <= 1100) {
      dispatch({
        type: GlobalContextTypes.SHOW_CHAT_MENU,
        payload: {
          showChatMenu: false
        }
      });
    };
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');
  //   };
  // }, [navigate]);

  return (
    <main className="lp:flex flex-row justify-between">
      {state?.showChatMenu && (
        <div className="max-w-[500px] lp:bg-black-100 w-full lp:h-[100vh]">
          <div className="flex justify-center mt-[8px] lp:my-[100px] mb-[75px] text-[32px] text-black-100">
            <h1 className="font-[300] lp:text-white-100">Anonymer</h1>
          </div>
          <span className="text-[20px]">
            Chats
          </span>
          <div className="flex flex-col gap-[15px] mt-[20px] lp:px-[50px]">
            {menuItems.map((menuItem) => (
              <Button
                variant={ButtonVartian.NONE}
                className="!rounded-[50px] "
                onClick={() => handleClick(menuItem.id)}
              >
                <MenuItem
                  key={menuItem.id}
                  icon={menuItem.src}
                  online={menuItem.online}
                  title={menuItem.title}
                />
              </Button>
            ))}
            <div className="flex justify-between gap-[20px]">
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
            </div>
          </div>
        </div>
      )}
      {(!state?.showChatMenu || windowWidth > 1100) && (
        <div>
          <Outlet />
        </div>
      )}
    </main>
  );
};

export default Home;
