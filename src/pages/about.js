export const About = () => {
  return (
    <>
      <div className='my-64 grid grid-cols-12' id='about'>
        <div className='flex flex-col items-center col-start-2 col-span-10 md:col-span-8 md:col-start-3'>
          <div className='md:text-6xl text-4xl text-[#e8c4c4]'>About Me</div>

          <span className='font-sans Segoe Print pt-4'>
            I created my first website at 16 but never thought of turning my
            hobby into a career until now. How technology has changed the world
            so far, and it will, is fascinating to me. Being part of the IT
            industry and contributing to that more significant cause excites me
            most. My primary expertise is making Web applications using React
            and JavaScript. Besides technology, I love visiting beaches while
            enjoying Australia's beautiful weather.
          </span>
        </div>
      </div>
    </>
  );
};
