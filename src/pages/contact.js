import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState();
  const [c, setC] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_axymekf',
        'template_jkv0r5c',
        form.current,
        '7DZraRzkDYMuU1Vs8'
      )
      .then(
        (result) => {
          setSent(true);
          setC('hidden');
          console.log(result.text);
        },
        (error) => {
          setSent(false);
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className='grid grid-cols-12 mt-28 2xl:mt-48' id='message'>
        <div className=' col-start-2 col-span-10 md:col-span-6 md:col-start-4 flex flex-col items-center mb-44'>
          <span className='md:text-6xl text-4xl pt-20 mb-[500px] xl:mb-[300px] 2xl:mb-[600px]'>
            Get in Touch
          </span>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className='flex flex-col  items-center my-4  p-2 2xl:mt-40 mt-36 absolute text-black'
          >
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your name'
              className='my-2 rounded-xl xl:w-[40vw] w-[70vw] 2xl:w-[30vw] py-2 pl-2'
              required
            />
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your email'
              className='my-2 rounded-xl xl:w-[40vw] w-[70vw] 2xl:w-[30vw] py-2 pl-2'
              required
            />
            <input
              type='text'
              id='message'
              name='message'
              placeholder='Hello Sagar!,'
              className='my-2 rounded-xl xl:w-[40vw] w-[70vw] 2xl:w-[30vw] py-2 pl-2'
              required
            />
            <button
              type='submit'
              value='send'
              className={
                c
                  ? c
                  : 'border-white border-2 rounded-xl xl:w-[30vw] w-[50vw] 2xl:w-[20vw] my-6 py-2 text-white'
              }
            >
              Submit
            </button>
          </form>
          {sent === true ? (
            <span className='absolute mt-[380px] text-xl'>Message Sent!</span>
          ) : sent === false ? (
            <span className='absolute mt-[380px] text-xl'>
              Something went wrong
            </span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </>
  );
};
