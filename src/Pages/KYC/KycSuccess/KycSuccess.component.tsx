import { ImageSuccess } from "Assets";
import Button from "Elements/Button";
import { ButtonVartian } from "Elements/Button/Button.config";
import { useNavigate } from "react-router-dom";

const KycSuccess = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-[200px] h-[200px] m-auto mt-[170px] lp:mt-0">
        <img
          className="w-full h-full"
          src={ImageSuccess} alt="" />
      </div>
      <div className="flex flex-col text-center mt-[50px]">
        <h1 className="text-[50px] font-bold">
          SUCCESS
        </h1>
        <span className="text-[18px] text-gray-100 mt-[50px]">
          Enjoy Anonymer
        </span>
        <div>
          <Button
            variant={ButtonVartian.PRIMARY}
            onClick={() => navigate('/chat/1')}
            className="mt-[50px] max-w-[200px] max-h-[48px] py-[12px] px-[77px]"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KycSuccess;
