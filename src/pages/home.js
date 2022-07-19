import gitlogo from '../images/gitlogo.png';
import linkedinlogo from '../images/linkedinlogo.png';
import codelogo from '../images/codelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <>
      <div id='home'>
        <div className='grid grid-cols-12 '>
          <div className='mb-20 mt-12 flex flex-col justify-items-center min-h-[200px] text-center bg-[#00000061] col-start-2 col-span-10 md:col-span-4 md:col-start-5'>
            <span className='md:text-4xl text-2xl p-2'>Sagar Dobariya</span>
            <span className='p-2'>Front-End Developer</span>
            <a
              href='https://drive.google.com/file/d/1f2AfVxw8JQoPeTr0sN78yPFoHYK2nwEh/view?usp=sharing'
              className='px-2 py-[1px]  border-2 rounded-lg absolute md:top-[265px] md:left-[45%] sm:top-[255px] top-[276px] left-[32%]'
            >
              Resume <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
            </a>

            <div className='flex justify-center absolute top-[320px] sm:top-[300px] left-[29%] sm:left-[36%] md:left-[44.5%]'>
              <span className='p-2'>
                <a href='https://github.com/infodsagar'>
                  <img src={gitlogo} alt='git logo' />
                </a>
              </span>
              <span className='p-2'>
                <a href='https://www.linkedin.com/in/sagar-dobariya-07810027/'>
                  <img src={linkedinlogo} alt='linked logo' />
                </a>
              </span>
              <span className='p-2'>
                <a href='https://codepen.io/infodsagar'>
                  <img src={codelogo} alt='code logo' className='w-[25px] ' />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
