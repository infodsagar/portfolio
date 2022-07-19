import logo from '../images/logo.png';
import { useState, useEffect, useRef } from 'react';
import { debounce } from '../componant/debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);

  return (
    <>
      <nav
        className={
          visible
            ? 'mb-6 flex  fixed right-10 top-0 z-10 duration-1000 transition-[top]'
            : 'mb-6 flex  fixed right-10 top-[-70px] z-10 duration-1000 transition-[top]'
        }
      >
        <a href='/' className='md:ml-10 ml:5 mr-5 mb-[-5px]'>
          <img
            src={logo}
            alt='logo main'
            className={
              visible
                ? 'md:h-20 h-16 p-2 md:left-8 left-6 fixed md:top-[-4px] top-[2px] duration-1000 transition-[top]'
                : 'md:h-20 h-16 p-2 md:left-8 left-6 fixed md:top-[-70px] top-[-65px] duration-1000 transition-[top]'
            }
          />
        </a>

        <a href='/' className='py-6 px-2 hidden md:flex'>
          Home
        </a>
        <a href='#about' className='py-6 px-2 hidden md:flex'>
          About
        </a>
        <a href='#skills' className='py-6 px-2 hidden md:flex'>
          Skills
        </a>
        <a href='#projects' className='py-6 px-2 hidden md:flex'>
          Projects
        </a>
        <a href='#message' className='py-6 px-2 hidden md:flex'>
          Contact
        </a>
        <button
          type='button'
          className='py-5 md:hidden text-xl min-w-[50px]'
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={open ? faClose : faBars}></FontAwesomeIcon>
        </button>
        <div
          className={
            open
              ? 'flex flex-col items-center md:hidden top-[68px] min-w-[130px] right-0 fixed bg-[#040404ab]'
              : 'flex flex-col items-center md:hidden hidden top-[68px] min-w-[130px] right-0 fixed bg-[#040404ab]'
          }
          ref={ref}
        >
          <a href='/' className='py-2' onClick={handleClick}>
            Home
          </a>
          <a href='#about' className='pb-2' onClick={handleClick}>
            About
          </a>
          <a href='#skills' className='pb-2' onClick={handleClick}>
            Skills
          </a>
          <a href='#projects' className='pb-2' onClick={handleClick}>
            Projects
          </a>
          <a href='#message' className='pb-2' onClick={handleClick}>
            Contact
          </a>
        </div>
      </nav>
      <div
        className={
          visible
            ? 'border-b-2 border-white fixed top-[65px] md:top-[75px] min-w-[100%] flex duration-1000 transition-[top]'
            : 'border-b-2 border-white fixed top-[-60px] md:top-[-60px] min-w-[100%] flex duration-1000 transition-[top]'
        }
      ></div>
      <div
        className={
          visible
            ? ' md:h-[72px] h-[65px]  fixed top-[0px] md:top-[0px] bg-[#040404ab] min-w-[100%] flex duration-1000 transition-[top]'
            : ' md:h-[72px] h-[65px] fixed top-[-65px] md:top-[-65px] min-w-[100%] flex duration-1000 transition-[top]'
        }
      ></div>
    </>
  );
};
