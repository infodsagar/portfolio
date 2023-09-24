export const About = () => {
  return (
    <>
      <div
        className='mt-[550px] xl:mt-[600px] 2xl:mt-[700px] grid grid-cols-12'
        id='about'
      >
        <div className='flex flex-col items-center col-start-2 col-span-10 md:col-span-10 md:col-start-2 xl:col-span-8 xl:col-start-3 2xl:py-36'>
          <div className='md:text-6xl text-4xl xl:my-14 '>About Me</div>
          <span
            className=' md:mt-10 md:px-8 px-2 pb-4 pt-4 rounded-xl bg-[#7544ae96] text-xl text-[#ffffff] antialiased'
            style={{ fontFamily: 'Lucida Console, monospace' }}
          >
            <div className='py-2'>
              A full-stack developer crafting bespoke solutions and software.
            </div>
            <div className='py-2'>
              I’m passionate about building high-quality UI/UX supported with
              APIs, Algorithms and design standards.
            </div>
            <div className='py-2'>
              Making positive impact using technology is my motivation and
              unique challanges are my fuel.
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
