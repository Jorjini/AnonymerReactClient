import cn from 'classnames';
import { IMessageItemProps } from './MessageItem.config';

const MessageItem = ({
  mine,
  message,
  time,
  icon
}: IMessageItemProps) => {
  const messageStyle = cn([
    'max-w-[270px] rounded-[15px] p-[17px]',
    { 'bg-gray-400 rounded-br-[0px]': !mine },
    { 'bg-black-100 rounded-bl-[0px]': mine },
  ]);

  const mainDivStyle = cn([
    'flex',
    { 'justify-end': !mine },
    { 'justify-start': mine }
  ]);

  return (
    <div className={mainDivStyle}>
      <div>
        <div className={messageStyle}>
          <p className={cn(mine ? 'text-white-100' : '')}>
            {message}
          </p>
        </div>
        <div className="flex flex-row gap-[7px] items-center justify-end">
          <span className="text-gray-300 text-[11px]">
            {time}
          </span>
          <div>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
