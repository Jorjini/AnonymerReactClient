import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImageAvatar } from 'Assets';
import UserItem from 'Components/UserItem';
import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
// import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Room = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleHomeClick = () => {
    navigate(`/home/chat/${id}`);
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');
  //   };
  // }, [navigate]);

  return (
    <div className="px-[25px] lp:px-[100px] w-[68vw]">
      <Button
        onClick={handleHomeClick}
        variant={ButtonVartian.NONE}
        className="w-[35px] h-[35px] bg-black-100 flex 
        justify-center items-center rounded-[50%] mt-[53px]"
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          color="white"
          className="[&>*]:fill-white-100"
        />
      </Button>
      <div className="justify-between bg-black-100 max-h-[80px] rounded-[13px]
        flex flex-row items-center mt-[21px] px-[15px] py-[10px]"
      >
        <div className="flex flex-row items-center gap-[14px]">
          <div className="w-[52px] h-[52px] p-[2px] rounded-[50%] border-[2px] border-green-100">
            <div className=" w-full h-full rounded-[50%]">
              <img src={ImageAvatar} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-[14px] text-white-100">GENERAL</span>
            <span className="text-[11px] text-green-100">228 Online</span>
          </div>
        </div>
        <span className="text-[8px]">
          VIEW MEMBERS
        </span>
      </div>
      <div className="mt-[28px] flex flex-wrap justify-center">
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
        <UserItem icon={ImageAvatar} name="giorgi ghvedashvili" />
      </div>
    </div>
  );
};

export default Room;