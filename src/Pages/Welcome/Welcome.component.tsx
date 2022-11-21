import Button from "Elements/Button";
import { ButtonVartian } from "Elements/Button/Button.config";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <main className="bg-black-100 h-[100vh]">
      <div className="absolute left-[50%] top-[50px] text-[32px] -translate-x-[50%] ">
        <h1 className="font-[300] text-white-100">Anonymer</h1>
      </div>
      <div className="flex flex-col gap-[12px] max-w-[250px] absolute bottom-[50px] left-[50%] -translate-x-[50%]">
        <Button
          onClick={() => handleClick('/login')}
          className="w-full max-h-[50px] py-[12px] px-[103px]"
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
    </main>
  );
};

export default Welcome;
