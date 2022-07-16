export const Contact = () => {
  return (
    <>
      <div className='grid grid-cols-12 mt-24' id='contact'>
        <div className=' col-start-2 col-span-10 md:col-span-6 md:col-start-4 my-4 flex flex-col items-center'>
          <span className='md:text-6xl text-4xl mb-14'>Get in Touch</span>

          <form
            method='POST'
            action='https://herotofu.com/start'
            className='flex flex-col  items-center my-4  p-2 min-w-full'
          >
            <input
              type='text'
              placeholder='Your name'
              className='my-2 rounded-xl min-w-full py-2'
            ></input>
            <input
              type='email'
              placeholder='Your email'
              className='my-2 rounded-xl w-[100%] py-2'
            ></input>
            <textarea
              type='textt'
              placeholder='Hello Sagar!,'
              className='my-2 rounded-xl w-[100%] py-2'
            ></textarea>
            <button
              type='submit'
              className='border-white border-2 rounded-xl w-[60%] my-6 py-2'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
