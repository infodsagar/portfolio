import gitlogo from '../images/gitlogo.png';
import linkedinlogo from '../images/linkedinlogo.png';
import codelogo from '../images/codelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Pdf from '../images/Sagar_Dobariya_Resume.pdf';

export const Home = () => {
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='flex flex-col items-center bg-[#2c2c2c6d] col-start-2 col-span-10 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 xl:col-span-4 xl:col-start-5 mt-[250px] 2xl:mt-[400px] rounded-md'>
          <span className='md:text-4xl text-2xl p-2'>Sagar Dobariya</span>
          <span className='p-2'>Full-stack Developer</span>
          <a href={Pdf}
          className='px-2 py-[1px] border-2 rounded-lg hover:bg-[#3c3a3a]'
          target='_blank'
          rel='noopener noreferrer'>
              Resume <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </a>

          <div className='flex justify-center '>
            <span className='p-2'>
              <a
                href='https://github.com/infodsagar'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={gitlogo} alt='git logo' className='hover:scale-110'/>
              </a>
            </span>
            <span className='p-2'>
              <a
                href='https://www.linkedin.com/in/sagar-dobariya-07810027/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={linkedinlogo} alt='linked logo' className='hover:scale-110'/>
              </a>
            </span>
            <span className='p-2'>
              <a
                href='https://codepen.io/infodsagar'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={codelogo} alt='code logo' className='w-[25px] hover:scale-110'/>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
