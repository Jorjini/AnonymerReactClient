import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import MessageItem from 'Components/MessageItem';
import Input from 'Elements/Input';
import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ImageAvatar } from 'Assets';
import { useGlobalContext } from 'Contexts/GlobalContext';
import windowSize from 'Helpers/windowSize';
import { GlobalContextTypes } from 'Contexts/GlobalContext/GlobalContext.config';
import useSendMessageMutation from 'Mutation/useSendMessageMutation';
import useGetContentQuery from 'Query/useGetContentQuery';
import { useEffect, useRef, useState } from 'react';
import { IReceiveMessageResponse } from '../Home.config';
import * as SignalR from '@microsoft/signalr';
import { IContent } from 'Types/Types';

const Chat = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const [content, setContent] = useState<IContent[]>([]);
  const [bool, setBool] = useState(false);

  const userData = JSON.parse(localStorage.getItem('userData')!);
  const userDataToken = userData?.token

  const { dispatch } = useGlobalContext();
  const sendMessage = useSendMessageMutation();
  const getContent = useGetContentQuery();

  const { windowWidth } = windowSize();
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();


  const onSubmit = async (event: any) => {
    setValue('message', '');

    await sendMessage({
      userId: userDataToken.userId,
      message: event.message,
      roomId: id!
    });
  };

  const handleHomeClick = () => {
    if (windowWidth <= 1200) {
      dispatch({
        type: GlobalContextTypes.SHOW_CHAT_MENU,
        payload: {
          showChatMenu: true
        }
      });
    };
  };

  const handleHeaderClick = () => {
    navigate(`/home/room/${id}`);
  };

  useEffect(() => {
    const req = async () => {
      const data = await getContent({ roomId: id! })

      if (data.statusCode === 200) {
        setContent(data.content);
      }
    }
    req();
  }, [getContent, id, bool]);

  const hubConnection = new SignalR.HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_BE_SOCKET_URL}hubs/chat?email=${userData?.token?.email}&userId=${userData?.token?.userId}&roomId=${id}`, {
      skipNegotiation: true,
      transport: SignalR.HttpTransportType.WebSockets
    })
    .build();

  hubConnection.start().then(() => {
  });

  hubConnection.on('ReceiveMessage', (e: IReceiveMessageResponse) => {
    // setContent([...content, e]);
    // console.log(content);
    setBool(!bool);

  });

  useEffect(() => {
    const scrollHeight = divRef.current?.scrollHeight || 0;
    divRef.current?.scrollTo(0, scrollHeight);
  }, [divRef, content]);

  return (
    <div className="px-[25px] lp:px-[100px] lp:w-[68vw] h-full lp:h-auto relative">
      <Button
        onClick={handleHomeClick}
        variant={ButtonVartian.NONE}
        className="w-[35px] h-[35px] bg-black-100 flex lp:hidden
        justify-center items-center rounded-[50%] mt-[53px] "
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
            {/* <span className="text-[11px] text-green-100">228 Online</span> */}
          </div>
        </div>
        <span className="text-[11px] lp:text-white-100">
          VIEW ALL MEMBERS
        </span>
      </Button>
      <div className="lp:relative lp:h-[60vh]">
        <div
          ref={divRef}
          className="chat-style lp:mt-[50px] overflow-y-auto overflow-x-hidden flex flex-col gap-[16px]"
        >
          {content.map((message) => (
            <MessageItem
              key={message._id}
              message={message.content}
              time={message.created}
              icon="icon"
              mine={message.userId === userDataToken.userId}
            />
          ))}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-[25px] lp:p-0 flex flex-row justify-between gap-[15px] absolute bottom-[26px] w-full left-0 lp:translate-y-[130px]"
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
