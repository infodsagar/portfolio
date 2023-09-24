import html from '../images/html.svg';
import tailwind from '../images/tailwind.svg';
import css from '../images/css.svg';
import git from '../images/git.svg';
import java from '../images/java.svg';
import reactlogo from '../images/reactlogo.svg';
import boot from '../images/boot.svg';
import node from '../images/node.svg';
import mongo from '../images/mongo.svg';
import next from '../images/next.svg';
import express from '../images/express.svg';
import mui from '../images/mui.svg';
import typelogo from '../images/typelogo.svg';
import clogo from '../images/clogo.svg';
import asplogo from '../images/asplogo.svg';

export const Skills = () => {
  return (
    <>
      <div className='grid grid-cols-12 py-18 2xl:py-40 mb-72 ' id='skills'>
        <div className='flex flex-col items-center col-start-3 col-span-10 md:col-span-6 md:col-start-4 my-4'>
          <span className='md:text-6xl text-4xl my-24 mr-14'>Skills</span>
          <div className='flex flex-wrap gap-10 absolute mt-52 mb-40 md:max-w-xl xl:max-w-2xl'>
            <div class='flex flex-col items-center'>
              <img
                src={html}
                className='w-[45px] h-[45px] hover:scale-150 '
                alt='logo img'
              />
              <span class='text-sm pt-3'>HTML</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={css}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>CSS</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={java}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>JavaScript</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={git}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>GIT</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={reactlogo}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>React</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={typelogo}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='typescript img'
              />
              <span class='text-sm pt-3'>TypeScript</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={boot}
                className='w-[47px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>Bootstrap</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={tailwind}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>Tailwind</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={asplogo}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>.NET core</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={clogo}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>C#</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={node}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>Node JS</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={mongo}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>Mongo DB</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={next}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>Next JS</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={express}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>Express JS</span>
            </div>
            <div class='flex flex-col items-center'>
              <img
                src={mui}
                className='w-[45px] h-[45px] hover:scale-150'
                alt='logo img'
              />
              <span class='text-sm pt-3'>Material UI</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
