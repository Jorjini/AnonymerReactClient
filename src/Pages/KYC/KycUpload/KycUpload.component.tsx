import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "Elements/Button";
import { ButtonVartian } from "Elements/Button/Button.config";
import Input from "Elements/Input";
import { useForm } from "react-hook-form";

const KycUpload = () => {
  const { register, handleSubmit } = useForm();


  const onSubmit = () => {

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row justify-center mt-[51px] mb-[141px]">
        <h1 className="lp:hidden block text-[32px]">Anonymer</h1>
      </div>
      <h1 className="text-[32px]">KYC</h1>
      <span className="text-[14px]">Please use the same First and Last name as written in National ID .</span>
      <div className="flex flex-col mt-[30px]">
        <label htmlFor="firstName">First Name</label>
        <Input
          id="firstName"
          required
          type="text"
          {...register('firstName')}
        />
      </div>
      <div className="flex flex-col mt-[25px]">
        <label htmlFor="lastName">Last Name</label>
        <Input
          id="lastName"
          required
          type="text"
          {...register('lastName')}
        />
      </div>
      <div className="mt-[50px]">
        <label
          className="flex justify-center flex-nowrap bg-black-100 max-h-[48px] text-center text-white-100 lp:px-[140px]
           py-[12px] text-[15px] lp:rounded-[8px] px-[85px] rounded-[50px]"
          htmlFor="file"
        >
          Upload National ID
        </label>
        <Input
          id="file"
          type="file"
          className="hidden"
          required
          {...register('file')}
        />
      </div>
      <Button
        variant={ButtonVartian.PRIMARY}
        type="submit"
        className="w-full max-h-[44px] text-[15px] mt-[83px] py-[11px] hidden lp:block"
      >
        NEXT
      </Button>
      <div className="mt-[135px] flex flex-row justify-end pb-[35px]">
        <Button
          variant={ButtonVartian.PRIMARY}
          type="submit"
          className="w-[60px] h-[60px] rounded-[50px] lp:hidden block"
        >
          <FontAwesomeIcon icon={faArrowRight} className="[&>*]:fill-white-100" />
        </Button>
      </div>
    </form>
  );
};

export default KycUpload;
