import logo from '../images/logo.png';

export const Navbar = () => {
  return (
    <>
      <div className='mb-6 flex border-white border-b-[1px] bg-[#00000000] '>
        <a href='/' className='md:ml-10 ml:5 mr-5'>
          <img src={logo} className='h-20 p-2' />
        </a>
        <div className='self-center absolute right-0'>
          <a href='/' className='p-2'>
            Home
          </a>
          <a href='about' className='p-2 '>
            About
          </a>
          <a href='skills' className='p-2 '>
            Skills
          </a>
          <a href='projects' className='p-2 '>
            Projects
          </a>
          <a href='contact' className='p-2 '>
            Contact
          </a>
          <a href='#' className='p-2'>
            Resume
          </a>
        </div>
      </div>
    </>
  );
};
