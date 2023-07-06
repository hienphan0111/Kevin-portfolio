import Link from 'next/link';
import { BsSun } from 'react-icons/bs';
import { FaRegUser, FaRegListAlt, FaEye, FaRegPaperPlane } from 'react-icons/fa';
import styles from './styles.module.css';

const SideBar = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center justify-center bg-zinc-700 w-16 h-16'>
        <BsSun className='text-white text-3xl'/>
      </div>
      <div className={`${styles.cursorChange} bg-zinc-700 flex flex-col divide-y-[0.5px] divide-slate-50 uppercase text-xs`}>
        <div className='flex flex-col gap-2 text-white items-center justify-center w-16 py-2'>
          <FaRegUser className='text-white text-xl' />
          <Link href='/about' >About</Link>
        </div>
        <div className='flex flex-col py-3 gap-2 text-white items-center justify-center w-16'>
          <FaRegListAlt className='text-white text-xl' />
          <Link href='/skills' >Skills</Link>
        </div>
        <div className='flex flex-col py-3 gap-2 cursor-pointer text-white items-center justify-center w-16'>
          <FaEye className='text-white text-xl' />
          <Link href='/projects' >Projects</Link>
        </div>
        <div className='flex flex-col py-3 gap-2 text-white items-center justify-center w-16'>
          <FaRegPaperPlane className='text-white text-xl' />
          <Link href='/contact' >Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar
