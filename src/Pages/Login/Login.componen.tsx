import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
import Input from 'Elements/Input';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ImageSecondMask } from 'Assets';
import Title from 'Elements/Title';
import useLoginMutation from 'Mutation/useLoginMutation';
import { useEffect, useState } from 'react';
import Toast from 'Components/Toast';
import { UserKycStatus } from 'Types/Types';

const Login = () => {
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const loginMutation = useLoginMutation();

  const onSubmit = async (event: any) => {
    const req = await loginMutation(event);

    if (req?.email) {
      localStorage.setItem('token', req.anonymerToken);
      localStorage.setItem('userData', JSON.stringify({ token: req }));

      if (!req.emailVerified) {
        navigate('/register/confirm-email');
      } else if (req.kycStatus === UserKycStatus.NotSet) {
        navigate('/kyc/upload');
      } else if (req.kycStatus === UserKycStatus.Pending) {
        setErrorMessage("KYC on pending");
        setShowToast(true);
      } else if (req.kycStatus === UserKycStatus.Approved) {
        navigate("/home");
      }
      else if (req.kycStatus === UserKycStatus.Rejected) {
        setErrorMessage("KYC on this account rejected.");
        setShowToast(true);
      }
      else {
        setErrorMessage("Something Went Wrong.");
        setShowToast(true);
      };
    } else {
      setErrorMessage(req.message[0]);
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
    }
  }, [navigate]);

  return (
    <main className="lp:flex justify-between items-center container gap-[181px] h-[100vh]">
      <Toast show={showToast} message={errorMessage} onClose={() => setShowToast(false)} />
      <div className="hidden lp:block w-[50vw] h-[100vh]">
        <img
          src={ImageSecondMask}
          alt=""
          className="w-full h-full z-0"
        />
      </div>
      <div className="lp:relative lp:w-[400px] ">
        <div className="absolute left-[50%] top-[50px] text-[32px] -translate-x-[50%] text-black-100">
          <h1 className="font-[300] title">Anonymer</h1>
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
                required
                placeholder="example@example.com"
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
                required
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
