'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { BiPaperPlane, BiCloudDownload } from 'react-icons/bi';
import bg1 from '../assets/bg1.jpg';
import heroImg from '../assets/hero.jpg';
import styles from './styles.module.css';
import Typical from 'react-typical';

const Hero = () => {
  return (
    <div className={`${styles.shadow} flex flex-col w-full`}>
      <div className='rounded-xl flex flex-col shadow-2xl h-full w-full'>
        <div className='-z-10 relative h-[450px]'>
          <Image src={bg1} className='h-full object-cover' alt='hero-img' />
        </div>
        <div className='w-100 h-full text-white bg-zinc-800 flex flex-col items-center rounded-t-[25%] -mt-20'>
          <div className='-mt-20 z-20'>
            <Image
              src={heroImg}
              alt='profile'
              className='rounded-full w-[150px] h-[150px] '
            />
          </div>
          <h1 className='font-bold text-4xl py-2'>Kevin Phan</h1>
          <Typical steps={['Full stack developer', 1000, 'Who is passionate about solving problems through coding.', 1000 ]}
            loop={Infinity}
            wrapper='p'
          />
          <div className='flex gap-4 rounded-t-2xl pt-3 text-2xl'>
            <Link href='https://github.com/hienphan0111'>
              <AiOutlineGithub />
            </Link>
            <Link href='https://www.linkedin.com/in/mr-hienphan/'>
              <AiFillLinkedin />
            </Link>
            <Link href='https://wa.me/84938102461'>
              <AiOutlineWhatsApp />
            </Link>
          </div>
          <div className='h-20' />
          <div className='grid grid-cols-2 w-full border-gradient-t'>
            <div className='flex gap-2 items-center justify-center py-4 border border-gradient-r cursor-pointer hover:bg-yellow-500'>
              <Link href="https://drive.google.com/file/d/1sbXi4p-1YGXxDabV6UjRL0UKKcqqem2O/view?usp=sharing">Download CV</Link>
              <BiCloudDownload />
            </div>
            <div className='flex gap-2 items-center justify-center cursor-pointer hover:bg-yellow-500'>
              <Link href='/contact'>Contact me </Link>
              <BiPaperPlane />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
