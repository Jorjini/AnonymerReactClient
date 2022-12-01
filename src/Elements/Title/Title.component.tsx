import { ITitleProps } from "./Title.config";
import cn from 'classnames';

const Title = ({
  text,
  className
}: ITitleProps) => (
  <div className={cn(className, 'flex flex-col mt-[230px]')}>
    <span className="m-auto w-[150px] text-center z-10 bg-gray-200 text-gray-600 text-[12px]">
      {text}
    </span>
    <span className="w-full border-t-[1px] border-gray-300 -translate-y-[10px]" />
  </div>
);

export default Title;
