import { ImageSecondMask } from "Assets";
import Toast from "Components/Toast";
import Button from "Elements/Button";
import { ButtonVartian } from "Elements/Button/Button.config";
import Input from "Elements/Input";
import useConfirmEmailMutation from "Mutation/useConfirmEmailMutation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserKycStatus } from "Types/Types";

const ConfirmEmail = () => {
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const confirmEmail = useConfirmEmailMutation();

  const onSubmit = async (event: any) => {
    const req = await confirmEmail(event);

    if (req.statusCode === 200) {
      localStorage.setItem('token', req.token.anonymerToken);
      localStorage.setItem('userData', JSON.stringify(req));

      navigate('/kyc/upload');
    } else {
      setErrorMessage(req.message[0]);
      setShowToast(true);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('userData')!);
    const userDataToken = userData?.token

    if (token && userDataToken?.emailVerified && userDataToken?.kycStatus === UserKycStatus.Pending) {
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
    <main className="lp:flex justify-between items-center container gap-[181px] h-[100vh] py-[50%] lp:py-0">
      <Toast show={showToast} message={errorMessage} onClose={() => setShowToast(false)} />
      <div className="hidden lp:block w-[50vw] h-[100vh]">
        <img
          src={ImageSecondMask}
          alt=""
          className="w-full h-full bg-cover z-0"
        />
      </div>
      <div className="lp:relative lp:w-[400px] lp:mt-0">
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
              {...register('code')}
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
