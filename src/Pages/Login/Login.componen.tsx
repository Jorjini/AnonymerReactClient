import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
import Input from 'Elements/Input';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import useFbAuthMutation from 'Mutation/useFbAuthMutation';

const Login = () => {
  const navigate = useNavigate();
  const fbLogin = useFbAuthMutation();

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    navigate('/kyc');
  };

  const responseFacebook = (e: any) => {
    console.log(e);
    fbLogin({ accessToken: e?.accessToken })
  }
  console.log(process.env);

  return (
    <main className="px-[25px]">
      <div className="absolute left-[50%] top-[50px] text-[32px] -translate-x-[50%] text-black-100">
        <h1 className="font-[300]">Anonymer</h1>
      </div>
      <div className="flex flex-col mt-[230px]">
        <span className="text-[20px]">Welcome!</span>
        <span className="text-gray-100">please login to continue</span>
      </div>
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
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_ID!}
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      </form>
    </main>
  );
};

export default Login;
