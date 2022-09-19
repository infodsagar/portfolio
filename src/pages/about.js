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
              A full-stack developer crafting delightful experiences and
              products on the web.
            </div>
            <div className='py-2'>
              I’m passionate about building high-quality UI/UX supported with
              APIs.
            </div>
            <div className='py-2'>
              How technology has changed the world so far, and it will, is
              fascinating to me.
            </div>
            <div classsName='py-2'>
              Being part of the IT industry and contributing to that more
              significant cause excites me most.
            </div>
            <div className='py-2'>
              Besides technology, I love visiting beaches while enjoying
              Australia's beautiful weather.
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
