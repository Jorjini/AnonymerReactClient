import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
import Input from 'Elements/Input';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    navigate('/kyc');
  };

  return (
    <main className="px-[25px] lp:flex justify-center">
      <div className="lp:max-w-[500px]">
        <div className="absolute left-[50%] top-[50px] text-[32px] -translate-x-[50%] text-black-100">
          <h1 className="font-[300]">Anonymer</h1>
        </div>
        <div className="flex flex-col mt-[167px]">
          <span className="text-[20px]">Sign Up</span>
          <span className="text-gray-100 max-w-[130px] text-[14px]">Create an new account</span>
        </div>
        <form
          className="mt-[52px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col mb-[25px]">
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
          <div className="flex flex-col mb-[25px]">
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
          <div className="flex flex-col">
            <label htmlFor="password">
              Confirm Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
            />
          </div>
          <div className="flex flex-row gap-[15px] mt-[79px]">
            <Input
              type="checkbox"
              {...register('confirmTerms')}
            />
            <span className="text-gray-100 text-[14px]">
              By creating an account you have to agree with our them & condication.
            </span>

          </div>
          <Button
            type="submit"
            variant={ButtonVartian.PRIMARY}
            className="w-full py-[13px] max-h-[50px] mt-[52px] mb-[92px]"
          >
            Login
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Register;
