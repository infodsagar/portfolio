import gitlogo from '../images/gitlogo.png';
import linkedinlogo from '../images/linkedinlogo.png';
import codelogo from '../images/codelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <>
      <div id='home'>
        <div className='grid grid-cols-12 '>
          <div className='mb-20 mt-12 flex flex-col justify-items-center min-h-[200px] text-center bg-[#00000061] col-start-2 col-span-10 md:col-span-4 md:col-start-5'>
            <span className='md:text-4xl text-2xl p-2'>Sagar Dobariya</span>
            <span className='p-2'>Front-End Developer</span>
            <a
              href='https://easyupload.io/z8v88u'
              className='p-2 border-2 rounded-lg absolute md:top-[260px] md:left-[574px] top-[250px] left-[185px]'
            >
              Resume <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </a>

            <div className='flex justify-center absolute mt-36 ml-36'>
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
