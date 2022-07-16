import html from '../images/html.svg';
import tailwind from '../images/tailwind.svg';
import css from '../images/css.svg';
import git from '../images/git.svg';
import java from '../images/java.svg';
import react from '../images/react.svg';
import boot from '../images/boot.svg';

export const Skills = () => {
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='flex flex-col items-center col-start-3 col-span-10 md:col-span-6 md:col-start-4 my-4'>
          <span className='md:text-6xl text-4xl my-4'>Skills</span>
          <div className='flex flex-wrap gap-10'>
            <div class='flex flex-col items-center'>
              <img src={html} className='w-[45px] h-[45px]' alt='logo img' />
              <span class='text-sm pt-3'>HTML</span>
            </div>
            <div class='flex flex-col items-center'>
              <img src={css} className='w-[45px] h-[45px] ' alt='logo img' />
              <span class='text-sm pt-3'>CSS</span>
            </div>
            <div class='flex flex-col items-center'>
              <img src={java} className='w-[45px] h-[45px]' alt='logo img' />
              <span class='text-sm pt-3'>JavaScript</span>
            </div>
            <div class='flex flex-col items-center'>
              <img src={git} className='w-[45px] h-[45px]' alt='logo img' />
              <span class='text-sm pt-3'>GIT</span>
            </div>
            <div class='flex flex-col items-center'>
              <img src={react} className='w-[45px] h-[45px]' alt='logo img' />
              <span class='text-sm pt-3'>React</span>
            </div>
            <div class='flex flex-col items-center'>
              <img src={boot} className='w-[47px] h-[45px]' alt='logo img' />
              <span class='text-sm pt-3'>Bootstrap</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={tailwind}
                className='w-[45px] h-[45px]'
                alt='logo img'
              />
              <span class='text-sm pt-3'>Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
