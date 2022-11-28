import { useState } from 'react';
import cn from 'classnames';
import Button from 'Elements/Button';
import { ButtonVartian } from 'Elements/Button/Button.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const KYC = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const handleArrowClick = () => {
    window.scrollTo(0, 0);
    setPage(page + 1);
  };

  const handleVideoClick = () => {
    navigate('/home');
  };

  const bulletStyle = [
    'w-[7px] h-[7px] block rounded-[50%]'
  ];

  return (
    <main className="px-[15px] pt-[15px]">
      {page === 0 && (
        <div>
          <div className="bg-gray-100 h-[450px]" />
          <h1 className="text-[30px] mt-[39px]">
            KYC is required to access Anonymer
          </h1>
          <p className="text-gray-100 text-[15px] mt-[12px]">
            Please be patience and follow KYC instructions
          </p>
        </div>
      )}
      {page === 1 && (
        <div>
          <div className="bg-gray-100 h-[450px]" />
          <h1 className="text-[30px] mt-[39px]">
            Remember no-one knows who writes what
          </h1>
          <p className="text-gray-100 text-[15px] mt-[12px]">
            Anonymer is place where you can express your point of view anonymously
          </p>
        </div>
      )}
      {page === 2 && (
        <div className="flex flex-col gap-[30px] justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-black-100">
          <Button
            variant={ButtonVartian.NONE}
            onClick={handleVideoClick}
            className="bg-white-100 h-[492px] w-[230px] flex items-center justify-center rounded-none"
          >
            <span className="text-[32px]">Video</span>
          </Button>
          <span className="text-white-100 text-[32px]">
            Welcome
          </span>
        </div>
      )}
      {page < 2 && (
        <div className="mt-[48px] pb-[35px] flex flex-row items-center justify-between">
          <div className="flex flex-row gap-[7px]">
            <span className={cn(bulletStyle, page === 0 ? 'w-[20px] bg-black-100 rounded-[30px]' : 'bg-gray-500')} />
            <span className={cn(bulletStyle, page === 1 ? 'w-[20px] bg-black-100 rounded-[30px]' : 'bg-gray-500')} />
            <span className={cn(bulletStyle, 'bg-gray-500')} />
          </div>
          <Button
            variant={ButtonVartian.NONE}
            onClick={handleArrowClick}
            className="w-[60px] h-[60px] bg-black-100 rounded-[50%]"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              color="white"
              className="[&>*]:fill-white-100"
            />
          </Button>
        </div>
      )}
    </main >
  );
};

export default KYC;
