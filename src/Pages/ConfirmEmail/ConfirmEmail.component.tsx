import { ImageSecondMask } from "Assets";
import Button from "Elements/Button";
import { ButtonVartian } from "Elements/Button/Button.config";
import Input from "Elements/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ConfirmEmail = () => {
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
        <div className="text-center">
          <h1 className="text-[50px]">ENTER CODE</h1>
          <span className="text-[18px] text-gray-100">
            Please check email for confirmation code
          </span>
        </div>
        <div className="lp:max-w-[500px] w-full mt-[50px]">
          <form
            className="mt-[49px] flex flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              id="confirm"
              type="text"
              placeholder="XXXX"
              className="lp:w-[400px] !bg-transparent !text-black-100 !border-[1px] border-black-100 text-center"
              {...register('confirm')}
            />
            <Button
              type="submit"
              variant={ButtonVartian.PRIMARY}
              className="w-[200px] py-[13px] max-h-[50px] mt-[52px]"
            >
              Next
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ConfirmEmail;
