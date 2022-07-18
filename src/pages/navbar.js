import logo from '../images/logo.png';

export const Navbar = () => {
  return (
    <>
      <nav className='mb-6 flex bg-[#00000000] fixed right-10  z-10 '>
        <a href='/' className='md:ml-10 ml:5 mr-5 mb-[-5px]'>
          <img
            src={logo}
            className='md:h-20 h-16 p-2 left-8 fixed md:top-[-4px] top-[2px]'
          />
        </a>
        <a href='/' className='py-6 px-2'>
          Home
        </a>
        <a href='#about' className='py-6 px-2'>
          About
        </a>
        <a href='#skills' className='py-6 px-2 '>
          Skills
        </a>
        <a href='#projects' className='py-6 px-2 '>
          Projects
        </a>
        <a href='#message' className='py-6 px-2 '>
          Contact
        </a>
      </nav>
      <div className='border-b-2 border-white fixed top-[65px] md:top-[75px] min-w-[100%]'></div>
    </>
  );
};
