import { IMenuItemsProps } from './MenuItem.config';

const MenuItem = ({
  icon,
  title,
  online
}: IMenuItemsProps) => (
  <div
    className="max-h-[70px] bg-black-100 rounded-[50px] [&>div>span]:lp:hover:text-black-100
        flex flex-row items-center justify-between py-[24px] px-[22px] 
        lp:hover:bg-white-100 [&>*]:lp:hover:text-black-100"
  >
    <div className="flex flex-row items-center gap-[25px]">
      <div className="w-[30px] h-[30px] border-[1px] border-white-100 rounded-[50%]">
        <img src={icon} alt="" />
      </div>
      <span className="text-white-100 ">
        {title}
      </span>
    </div>
    <span className="text-[11px] text-white-100">
      {`${online} online`}
    </span>
  </div>
);

export default MenuItem;
