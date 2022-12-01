import { ImageSecondMask } from "Assets";
import Button from "Elements/Button";
import { ButtonVartian } from "Elements/Button/Button.config";
import Title from "Elements/Title";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <main className="px-[25px] h-[100vh] lp:flex justify-center items-center container gap-[181px] background-image ">
      <div className="hidden lp:block w-[700px] h-[700px]">
        <img
          src={ImageSecondMask}
          alt=""
          className="w-full h-full bg-cover z-0"
        />
      </div>
      <div className="lp:w-[400px] lp:h-[700px] flex flex-col items-center lp:mt-0 z-10 pt-[51px]">
        <div className="text-[32px]  mb-[50px]">
          <h1 className="font-[300] text-white-100 lp:text-black-100">Anonymer</h1>
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
