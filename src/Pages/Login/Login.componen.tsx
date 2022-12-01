import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
import Input from 'Elements/Input';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ImageSecondMask } from 'Assets';
import Title from 'Elements/Title';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    navigate('/kyc');
  };

  return (
    <main className="px-[25px] lp:flex justify-center items-center container gap-[181px] h-[100vh]">
      <div className="hidden lp:block w-[700px] h-[700px]">
        <img
          src={ImageSecondMask}
          alt=""
          className="w-full h-full bg-cover z-0"
        />
      </div>
      <div className="lp:relative lp:w-[400px] ">
        <div className="absolute left-[50%] top-[50px] text-[32px] -translate-x-[50%] text-black-100">
          <h1 className="font-[300]">Anonymer</h1>
        </div>
        <div className="lp:max-w-[500px] z-20 w-full">
          <Title text="WELCOME" />
          <form
            className="mt-[49px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col mb-[14px]">
              <label htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="rikafashionshop@gmail.com"
                {...register('email')}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                {...register('password')}
              />
            </div>
            <Button
              type="submit"
              variant={ButtonVartian.PRIMARY}
              className="w-full py-[13px] max-h-[50px] mt-[52px]"
            >
              Login
            </Button>
            <div className="flex flex-row justify-center mt-[55px]">
              <span className="text-[14px]">
                Do not have an account?
                <Link to="/register" className="color-black-100 text-[14px] font-bold ml-[4px]">
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
