import link from '../images/link.svg';
import githublogo from '../images/githublogo.svg';
import servicess from '../images/servicess.PNG';
import amazonss from '../images/amazonss.PNG';

export const Projects = () => {
  return (
    <>
      <div className='grid grid-cols-12 my-14'>
        <div className=' col-start-3 col-span-10 md:col-span-10 md:col-start-2 my-4 flex flex-col items-center'>
          <span className='md:text-6xl text-4xl mb-20 '>Projects</span>
          <div className='flex items-center my-24'>
            <div>
              <div className='text-lg py-2'>Featured Project</div>
              <div className='text-xl py-2'>Service NSW Clone</div>
              <div className='text-xl bg-[#c60c3193] rounded-xl p-2 max-w-7xl'>
                Used Pure CSS and Vanila to clone Service NSW website. Features
                includes tabs toggle hide/show, burger menu for collapsed
                navbar.
              </div>
              <span className='text-xl'>HTML CSS JavaScript</span>
              <div className='flex align-center gap-2'>
                <a href='https://github.com/infodsagar/service-nsw-clone'>
                  <img src={githublogo} alt='git logo' />
                </a>
                <a href='https://service-nsw.netlify.app/'>
                  <img src={link} alt='git logo' />
                </a>
              </div>
            </div>
            <div>
              <img src={servicess} alt='service' className='rounded-xl' />
            </div>
          </div>
          <div className='flex items-center'>
            <div>
              <div className='text-lg py-2'>Featured Project</div>
              <div className='text-xl py-2'>Amazon Clone</div>
              <div className='text-xl bg-[#c60c3193] rounded-xl p-2 max-w-7xl'>
                Amazon clone made using React, HTML, and CSS. In background
                product data will be featched from API. Cart features such as
                add items, delete items, display total amount and store data on
                client local storage.
              </div>
              <span className='text-xl'>React HTML CSS JavaScript</span>
              <div className='flex align-center gap-2'>
                <a href='https://github.com/infodsagar/service-nsw-clone'>
                  <img src={githublogo} alt='git logo' />
                </a>
                <a href='https://service-nsw.netlify.app/'>
                  <img src={link} alt='git logo' />
                </a>
              </div>
            </div>
            <div>
              <img src={amazonss} alt='service' className='rounded-xl' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
