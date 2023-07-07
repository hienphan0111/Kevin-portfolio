'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BsSun } from 'react-icons/bs';
import { FaRegUser, FaRegListAlt, FaEye, FaRegPaperPlane } from 'react-icons/fa';
import styles from './styles.module.css';
import { Cursor, MouseContextProvider } from 'custom-pointer-react';

const SideBar = () => {
  const [curColor, setCurColor] = useState("#FFFFFF");

  return (
    <div className='flex flex-col gap-3 z-50'>
      <MouseContextProvider>
        <Cursor
          showRing={true}
          color={curColor}
          ringSize={51}
          cursorSize={10}
          ringBorder={2}
        />
        {/* <div className='flex items-center justify-center bg-zinc-700 w-16 h-16'>
          <BsSun className='text-white text-3xl'/>
        </div> */}
        <div className={`${styles.cursorChange} bg-zinc-700 flex justify-around md:justify-center sm:w-full md:flex-col divide-y-[0.5px] divide-slate-50 uppercase text-xs`}>
          <div className='flex flex-col gap-2 text-white items-center justify-center w-16 py-2 hover:text-yellow-400 circle-cursor' onMouseOver={() => setCurColor("#f2db45")} onMouseLeave={() => setCurColor("#fff")}>
            <FaRegUser className='text-xl' />
            <Link href='/about' >About</Link>
          </div>
          <div className='flex flex-col py-3 gap-2 text-white items-center justify-center w-16 hover:text-yellow-400' onMouseOver={() => setCurColor("#f2db45")} onMouseLeave={() => setCurColor("#fff")}>
            <FaRegListAlt className='text-xl' />
            <Link href='/skills' >Skills</Link>
          </div>
          <div className='flex flex-col py-3 gap-2 cursor-pointer text-white items-center justify-center w-16 hover:text-yellow-400' onMouseOver={() => setCurColor("#f2db45")} onMouseLeave={() => setCurColor("#fff")}>
            <FaEye className='text-xl' />
            <Link href='/projects' >Projects</Link>
          </div>
          <div className='flex flex-col py-3 gap-2 text-white items-center justify-center w-16 hover:text-yellow-400' onMouseOver={() => setCurColor("#f2db45")} onMouseLeave={() => setCurColor("#fff")}>
            <FaRegPaperPlane className='text-xl' />
            <Link href='/contact' >Contact</Link>
          </div>
        </div>
      </MouseContextProvider>
    </div>
  )
}

export default SideBar
