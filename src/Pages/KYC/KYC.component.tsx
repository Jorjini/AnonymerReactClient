import { ImageSecondMask } from "Assets";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserKycStatus } from "Types/Types";

const KYC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData')!);

    if (userData?.token?.kycStatus === UserKycStatus.Approved) {
      navigate('/home');
    };
  }, [navigate]);

  return (
    <main className="px-[25px] lp:px-0 lp:flex justify-between items-center container gap-[181px] h-[100vh]">
      <div className="hidden lp:block w-[50vw] h-[100vh]">
        <img
          src={ImageSecondMask}
          alt=""
          className="w-full h-full z-0"
        />
      </div>
      <div className="m-auto">
        <Outlet />
      </div>
    </main >
  );
};

export default KYC;
