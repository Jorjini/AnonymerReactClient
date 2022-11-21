import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import MessageItem from 'Components/MessageItem';
import Input from 'Elements/Input';
import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    // TODO: submit code
  };

  const handleHomeClick = () => {
    navigate('/');
  };


  return (
    <main className="px-[25px]">
      <Button
        onClick={handleHomeClick}
        variant={ButtonVartian.NONE}
        className="w-[35px] h-[35px] bg-black-100 flex 
        justify-center items-center rounded-[50%] mt-[53px]"
      >
        <FontAwesomeIcon
          icon={faHome}
          color="white"
          className="[&>*]:fill-white-100"
        />
      </Button>
      <div className="justify-between bg-white-100 max-h-[80px] rounded-[13px]
        flex flex-row items-center mt-[21px] px-[15px] py-[10px]"
      >
        <div className="flex flex-row items-center gap-[14px]">
          <div className="w-[52px] h-[52px] p-[2px] rounded-[50%] border-[2px] border-green-100">
            <div className="bg-black-100 w-full h-full rounded-[50%]"></div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-[14px]">GENERAL</span>
            <span className="text-[11px] text-green-100">228 Online</span>
          </div>
        </div>
        <span className="text-[8px]">
          VIEW MEMBERS
        </span>
      </div>
      <div>
        <div className="mt-[50px] overflow-y-auto max-h-[476px]">
          <MessageItem />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row gap-[15px] absolute bottom-[26px]">
          <Input
            type="text"
            placeholder="Type message..."
            className="!border-[1px] border-gray-200
          rounded-[50px] px-[18px] py-[15px] max-h-[50px]"
            {...register('message')}
          />
          <Button
            type="submit"
            variant={ButtonVartian.NONE}
            className="w-[50px] h-[50px] bg-black-100 flex justify-center
          items-center rounded-[50%]"
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              color="white"
              className="[&>*]:fill-white-100"
            />
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Chat;
