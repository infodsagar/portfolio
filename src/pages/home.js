import gitlogo from '../images/gitlogo.png';
import linkedinlogo from '../images/linkedinlogo.png';
import codelogo from '../images/codelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <>
      <div className='grid grid-cols-12 absolute w-[80%] max-w-[400px] left-[50%] top-[40%] translate-x-[-50%]'>
        <div className='flex flex-col items-center bg-[#00000061] col-span-12'>
          <span className='md:text-4xl text-2xl p-2'>Sagar Dobariya</span>
          <span className='p-2'>Full-stack Developer</span>
          <a
            href='https://drive.google.com/file/d/1t31zRxN3O3i-L7GXCa2mTFVhOIznjmll/view?usp=sharing'
            className='px-2 py-[1px]  border-2 rounded-lg '
            target='_blank'
          >
            Resume <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </a>

          <div className='flex justify-center '>
            <span className='p-2'>
              <a href='https://github.com/infodsagar' target='_blank'>
                <img src={gitlogo} alt='git logo' />
              </a>
            </span>
            <span className='p-2'>
              <a
                href='https://www.linkedin.com/in/sagar-dobariya-07810027/'
                target='_blank'
              >
                <img src={linkedinlogo} alt='linked logo' />
              </a>
            </span>
            <span className='p-2'>
              <a href='https://codepen.io/infodsagar' target='_blank'>
                <img src={codelogo} alt='code logo' className='w-[25px] ' />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
