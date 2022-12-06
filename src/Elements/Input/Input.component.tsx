import { forwardRef } from "react";
import { IInputProps } from "./Input.config";
import cn from 'classnames';

const Input = forwardRef<HTMLInputElement, IInputProps>(({
  id,
  onChange,
  onBlur,
  type = 'text',
  className,
  name,
  required,
  placeholder
}, ref) => {
  const inputStyle = cn([
    className,
    'border-l-0 border-r-0 border-t-0 border-b-[1px] outline-none border-gray-200',
    'py-[5px] lp:bg-black-100 lp:text-white-100 px-[16px] rounded-[8px] lp:h-[48px]'
  ]);

  return (
    <input
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      className={inputStyle}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      ref={ref}
    />
  );
});

export default Input;
