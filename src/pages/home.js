import { Boy } from '../componant/animation';
import { Star } from '../componant/star';

export const Home = () => {
  return (
    <>
      <div>
        <Star />
        <div className='grid grid-cols-12 '>
          <div className='mb-20 flex flex-col justify-items-center text-center bg-[#00000061] col-start-2 col-span-10 md:col-span-4 md:col-start-5'>
            <span className='text-4xl p-2'>Sagar Dobariya</span>
            <span className='p-2'>Front-End Developer</span>
            <button type='button' className='p-2'>
              Resume
            </button>
            <div className='flex justify-center'>
              <span className='p-2'>Gitgub icon</span>
              <span className='p-2'>Linkedin icon</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
