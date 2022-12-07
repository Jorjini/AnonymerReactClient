import { ImageSecondMask } from "Assets";
import Button from "Elements/Button";
import { ButtonVartian } from "Elements/Button/Button.config";
import Title from "Elements/Title";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserKycStatus } from "Types/Types";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('userData')!);
    const userDataToken = userData?.token

    if (token && !userDataToken?.emailVerified) {
      navigate('/register/confirm-email');
    } else if (token && userDataToken?.kycStatus === UserKycStatus.Pending) {
      navigate('/kyc/upload');
    } else if (
      token &&
      userDataToken?.kycStatus === UserKycStatus.Approved &&
      userDataToken?.emailVerified
    ) {
      navigate('/home');
    };
  }, [navigate]);

  return (
    <main className="h-[100vh] lp:flex justify-between items-center container gap-[181px] background-image ">
      <div className="hidden lp:block w-[50vw] h-[100vh]">
        <img
          src={ImageSecondMask}
          alt=""
          className="w-full h-full bg-cover z-0"
        />
      </div>
      <div className="lp:w-[400px] lp:h-[700px] flex flex-col items-center lp:mt-0 z-10 pt-[51px]">
        <div className="text-[32px]  mb-[50px]">
          <h1 className="font-[300] text-white-100 lp:text-black-100 title">Anonymer</h1>
        </div>
        <div className="w-full hidden lp:block">
          <Title text="WELCOME" />
        </div>
        <div className="mt-[52px] w-full flex flex-col gap-[25px] lp:static !w- absolute  bottom-[38px] px-[63px]">
          <Button
            onClick={() => handleClick('/login')}
            className="w-full max-h-[50px] py-[12px] px-[103px] lp:border-[1px] lp:border-black-100"
            variant={ButtonVartian.SECONDARY}
          >
            Login
          </Button>
          <Button
            onClick={() => handleClick('/register')}
            className="w-full max-h-[50px] py-[12px] px-[77px]"
            variant={ButtonVartian.PRIMARY}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
