import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import MessageItem from 'Components/MessageItem';
import Input from 'Elements/Input';
import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as SignalR from '@microsoft/signalr';
import { ImageAvatar } from 'Assets';

const Chat = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { register, handleSubmit } = useForm();

  // Sockets
  // TODO: Need to pass email
  const hubConnection = new SignalR.HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_BE_SOCKET_URL}hubs/chat?email=${'ghveda1997@mail.ru'}`, {
      skipNegotiation: true,
      transport: SignalR.HttpTransportType.WebSockets
    })
    .build();

  hubConnection.start().then(a => {
    if (hubConnection.connectionId) {
      hubConnection.invoke("sendConnectionId", hubConnection.connectionId);
    }
  });

  // hubConnection.invoke('ReceiveMessage', { newMessage: 'some' });
  hubConnection.on('UpdateOnline', (e) => console.log(e));

  const onSubmit = () => {
    // TODO: submit code
    hubConnection.invoke('ReceiveMessage', { message: 'some' });
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleHeaderClick = () => {
    navigate(`/home/room/${id}`)
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
        className="w-[35px] h-[35px] bg-black-100 flex lp:hidden
        justify-center items-center rounded-[50%] mt-[53px]"
      >
        <FontAwesomeIcon
          icon={faHome}
          color="white"
          className="[&>*]:fill-white-100"
        />
      </Button>
      <Button
        variant={ButtonVartian.NONE}
        onClick={handleHeaderClick}
        className="justify-between bg-white-100 max-h-[80px] rounded-[13px]
        flex flex-row items-center mt-[21px] lp:mt-[60px] px-[15px] py-[10px] w-full lp:bg-black-100"
      >
        <div className="flex flex-row items-center gap-[14px]">
          <div className="w-[52px] h-[52px] p-[2px] rounded-[50%] border-[2px] border-green-100">
            <div className="bg-black-100 w-full h-full rounded-[50%]">
              <img src={ImageAvatar} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-[14px] lp:text-white-100">GENERAL</span>
            <span className="text-[11px] text-green-100">228 Online</span>
          </div>
        </div>
        <span className="text-[11px] lp:text-white-100">
          VIEW ALL MEMBERS
        </span>
      </Button>
      <div className="relative">
        <div className="chat-style mt-[50px] overflow-y-auto flex flex-col gap-[16px]">
          {/* TODO: map function must be added */}
          <MessageItem
            message="This is my message This is my messageThis is my messageThis is my message"
            time="4:35 am"
            icon="icon"
            mine
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />

          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
          <MessageItem
            message="This is you message"
            time="4:35 am"
            icon="icon"
            mine={false}
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row justify-between gap-[15px] absolute bottom-[26px] w-full left-0 translate-y-[130px]"
        >
          <Input
            type="text"
            placeholder="Type message..."
            className="!border-[1px] border-gray-500 w-full !bg-white-100
              !rounded-[50px] px-[18px] py-[15px] max-h-[50px] !text-black-100"
            {...register('message')}
          />
          <Button
            type="submit"
            variant={ButtonVartian.NONE}
            className="!w-[50px] h-[50px] bg-black-100 flex justify-center
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
    </div>
  );
};

export default Chat;