import { IUserItemProps } from './UserItem.config';

const UserItem = ({
  name,
  icon
}: IUserItemProps) => (
  <div className="flex flex-col justify-center items-center gap-[14px] mb-[20px]">
    <div className="w-[52px] h-[52px] p-[2px] rounded-[50%] border-[2px] border-green-100">
      <div className="bg-black-100 w-full h-full rounded-[50%]">
        {icon}
      </div>
    </div>
    <span className="text-[12px] max-w-[83px] text-ellipsis overflow-hidden whitespace-nowrap">
      {name}
    </span>
  </div>
);

export default UserItem;
