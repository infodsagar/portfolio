import supermanlogo from '../images/supermanlogo.png';
import '../css/baranimation.css';

export const Loading = () => {
  return (
    <>
      <div className='flex flex-col  items-center md:justify-center min-h-[100vh] max-h-[100vh] overflow-hidden'>
        <img
          src={supermanlogo}
          alt='logo'
          className='w-[200px] h-[165px] bg-[#ffffff86] rounded-xl pl-2 mt-32 md:mt-0 py-2'
        />
        <div>
          <div className='flex pt-8'>
            <div className='h-3 w-20' id='block-1'></div>
            <div className='h-3 w-20 ml-1' id='block-2'></div>
            <div className='h-3 w-20 ml-1' id='block-3'></div>
          </div>
        </div>
      </div>
    </>
  );
};
