import { IMenuItemsProps } from './MenuItem.config';

const MenuItem = ({
  icon,
  title,
  online
}: IMenuItemsProps) => {
  return (
    <div
      className="max-h-[70px] bg-black-100 rounded-[50px] 
      flex flex-row items-center justify-between py-[24px] px-[22px]"
    >
      <div className="w-[25px] h-[25px]">
        {icon}
      </div>
      <span className="text-white-100">
        {title}
      </span>
      <span className="text-[11px] text-white-100">
        {`${online} online`}
      </span>
    </div>
  );
};

export default MenuItem