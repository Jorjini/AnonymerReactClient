import { ImageSecondMask } from "Assets";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const KYC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home/chat/1');
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
