import { ImageKycStart } from "Assets";
import Button from "Elements/Button";
import { ButtonVartian } from "Elements/Button/Button.config";
import { useNavigate } from "react-router-dom";

const KycStart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-[500px] m-auto">
        <img
          className="w-full h-full"
          src={ImageKycStart} alt="" />
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-[30px] font-bold">
          KYC is required to access Anonymer
        </h1>
        <span className="text-[18px] text-gray-100">
          Please be patience and follow instructions
        </span>
        <div>
          <Button
            variant={ButtonVartian.PRIMARY}
            onClick={() => navigate('/kyc/success')}
            className="mt-[50px] max-w-[200px] max-h-[48px] py-[12px] px-[77px]"
          >
            START
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KycStart;
