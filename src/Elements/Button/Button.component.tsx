import { ButtonVartian, IButtonProps } from './Button.config';
import cn from 'classnames';

const Button = ({
  children,
  className,
  onClick,
  type,
  variant
}: IButtonProps) => {

  const buttonStyle = cn([
    className,
    'rounded-[30px] border-[2px] border-white-100',
    { '': ButtonVartian.NONE },
    { 'bg-black-100 text-white-100': variant === ButtonVartian.PRIMARY },
    { 'text-black-100 bg-white-100': variant === ButtonVartian.SECONDARY },
  ]);

  return (
    <button
      type={type}
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button