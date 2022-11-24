import MenuItem from 'Components/MenuItem'
import Button from 'Elements/Button'
import { ButtonVartian } from 'Elements/Button/Button.config'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { menuItems } from './Home.mock'

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/chat/${id}`);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    };
  }, [navigate]);



  return (
    <main className="px-[25px]">
      <div className="flex justify-center mt-[8px] mb-[75px] text-[32px] text-black-100">
        <h1 className="font-[300]">Anonymer</h1>
      </div>
      <span className="text-[20px]">
        Chats
      </span>
      <div className="flex flex-col gap-[15px] mt-[20px]">
        {menuItems.map((menuItem) => (
          <Button
            variant={ButtonVartian.NONE}
            onClick={() => handleClick(menuItem.id)}
          >
            <MenuItem
              key={menuItem.id}
              icon={menuItem.icon}
              online={menuItem.online}
              title={menuItem.title}
            />
          </Button>
        ))}
      </div>
    </main>
  )
}

export default Home