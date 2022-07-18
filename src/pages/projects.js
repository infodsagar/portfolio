import linkred from '../images/linkred.svg';
import linkora from '../images/linkora.svg';
import linkblue from '../images/linkblue.svg';
import githublogored from '../images/githublogored.svg';
import githublogoora from '../images/githublogoora.svg';
import githublogoblue from '../images/githublogoblue.svg';
import servicess from '../images/servicess.PNG';
import amazonss from '../images/amazonss.PNG';
import regoss from '../images/regoss.PNG';

export const Projects = () => {
  return (
    <>
      <div className='grid grid-cols-12 my-14 py-10' id='projects'>
        <div className=' col-start-2 col-span-10 md:col-span-10 md:col-start-2 my-4 flex flex-col items-center'>
          <span className='md:text-6xl text-4xl mb-4 '>Projects</span>
          <div className='flex flex-col md:flex-row items-center my-24'>
            <div>
              <div className='text-lg py-2'>Featured Project</div>
              <div className='text-xl py-2'>Service NSW Clone</div>
              <div className='text-xl bg-[#c60c3193] rounded-xl p-2 max-w-7xl'>
                Used Pure CSS and Vanilla to clone the Service NSW website.
                Features include tabs toggle hide/show and a burger menu for the
                collapsed navbar.
              </div>
              <span className='text-xl'>HTML CSS JavaScript</span>
              <div className='flex align-center absolute md:relative'>
                <a href='https://github.com/infodsagar/service-nsw-clone'>
                  <img src={githublogored} alt='git logo' />
                </a>
                <a href='https://service-nsw.netlify.app/'>
                  <img src={linkred} alt='git logo' />
                </a>
              </div>
            </div>
            <div className='py-10'>
              <img src={servicess} alt='service' className='rounded-xl' />
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center my-10'>
            <div>
              <div className='text-lg py-2'>Featured Project</div>
              <div className='text-xl py-2'>Amazon Clone</div>
              <div className='text-xl bg-[#f08a04dd] rounded-xl p-2 max-w-7xl'>
                Amazon clone made using React, HTML, and CSS. In the background
                product, data will be fetched from API. Cart features such as
                adding items, deleting items, displaying the total amount, and
                storing data on client local storage.
              </div>
              <span className='text-xl'>React HTML CSS JavaScript</span>
              <div className='flex align-center absolute md:relative'>
                <a href='https://github.com/infodsagar/amazon-clone'>
                  <img src={githublogoora} alt='git logo' />
                </a>
                <a href='https://amazon-react-1.netlify.app/'>
                  <img src={linkora} alt='git logo' />
                </a>
              </div>
            </div>
            <div className='py-10'>
              <img src={amazonss} alt='service' className='rounded-xl' />
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center my-10'>
            <div>
              <div className='text-lg py-2'>Featured Project</div>
              <div className='text-xl py-2'>Refund Calculator</div>
              <div className='text-xl bg-[#78b6f5e9] rounded-xl p-2 max-w-4xl'>
                Refund calculator for canceled car registration for Transport
                for NSW. Date to date calculator. Display final round amount
                after deducting admin and cancelation fees.
              </div>
              <span className='text-xl'>
                React Bootstrap HTML CSS JavaScript
              </span>
              <div className='flex align-center absolute md:relative'>
                <a href='https://github.com/infodsagar/rego-calc'>
                  <img src={githublogoblue} alt='git logo' />
                </a>
                <a href='https://rego-nsw.netlify.app/'>
                  <img src={linkblue} alt='git logo' />
                </a>
              </div>
            </div>
            <div className='py-10'>
              <img src={regoss} alt='service' className='rounded-xl' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
