import MenuItem from 'Components/MenuItem'
import Button from 'Elements/Button'
import { ButtonVartian } from 'Elements/Button/Button.config'
// import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { menuItems } from './Home.mock'

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/chat/${id}`);
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');
  //   };
  // }, [navigate]);

  return (
    <main className="flex flex-row justify-between">
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
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Home;
