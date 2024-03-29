import { ImageSecondMask } from 'Assets';
import Toast from 'Components/Toast';
import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
import Input from 'Elements/Input';
import Title from 'Elements/Title';
import useRegisterMutation from 'Mutation/useRegisterMutation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { UserKycStatus } from 'Types/Types';

const Register = () => {
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const registerMutation = useRegisterMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    if (data.password === data.confirmPassword) {
      const req = await registerMutation({
        ...data
      });

      if (req.statusCode === 200) {
        localStorage.setItem('userData', JSON.stringify(req));
        navigate('/register/confirm-email');
      } else {
        setErrorMessage(req.message[0] || '');
        setShowToast(true);
      }
    } else {
      setErrorMessage('Password does not match');
      setShowToast(true);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('userData')!);
    const userDataToken = userData?.token

    if (
      token &&
      userDataToken?.kycStatus === UserKycStatus.Approved &&
      userDataToken?.emailVerified
    ) {
      navigate('/home');
    };
  }, [navigate]);

  return (
    <main className="lp:flex justify-between items-center container gap-[181px] h-[100vh]">
      <Toast show={showToast} message={errorMessage} onClose={() => setShowToast(false)} />
      <div className="hidden lp:block w-[50vw] h-[100vh]">
        <img
          src={ImageSecondMask}
          alt=""
          className="w-full h-full bg-cover z-0"
        />
      </div>
      <div className="lp:w-[400px] relative">
        <div className="flex flex-col lp:mt-0">
          <span className="text-[28px] text-center">Create Account</span>
        </div>
        <Title text="SIGN UP WITH EMAIL" className="mt-[29px]" />
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
              required
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
              required
              type="password"
              placeholder="Password"
              {...register('password')}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              required
              placeholder="Confirm Password"
              {...register('confirmPassword')}
            />
          </div>
          <div className="flex flex-row items-center gap-[15px] mt-[79px] lp:mt-[59px]">
            <Input
              required
              type="checkbox"
              className="accent-black-100"
              {...register('confirmTerms')}
            />
            <span className="text-gray-100 text-[14px]">
              I accept
              <span className="font-bold text-[14px]">
                Terms and Conditions
              </span>
            </span>
          </div>
          <Button
            type="submit"
            variant={ButtonVartian.PRIMARY}
            className="w-full py-[13px] max-h-[50px] mt-[52px] lp:mt-[28px]"
          >
            Create Account
          </Button>
        </form>
        <div className="flex flex-row justify-center mt-[30px]">
          <span className="text-[14px]">
            Already have an account?
            <Link to="/login" className="color-black-100 text-[14px] font-bold ml-[4px]">
              Log In
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Register;
