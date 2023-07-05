import Link from 'next/link';
import { BsSun } from 'react-icons/bs';
import { FaRegUser, FaRegListAlt, FaEye, FaRegPaperPlane } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='p-3 flex flex-col gap-3'>
      <div className='flex items-center justify-center bg-zinc-700 w-16 h-16'>
        <BsSun className='text-white text-3xl'/>
      </div>
      <div className='bg-zinc-700 p-1 flex flex-col divide-y-[0.5px] divide-slate-50 uppercase text-xs'>
        <div className='flex flex-col gap-2 text-white items-center justify-center  w-16 py-2'>
          <FaRegUser className='text-white text-xl' />
          <Link href='/' >About</Link>
        </div>
        <div className='flex flex-col py-3 gap-2 text-white items-center justify-center w-16'>
          <FaRegListAlt className='text-white text-xl' />
          <Link href='/' >Skills</Link>
        </div>
        <div className='flex flex-col py-3 gap-2 text-white items-center justify-center w-16'>
          <FaEye className='text-white text-xl' />
          <Link href='/' >Projects</Link>
        </div>
        <div className='flex flex-col py-3 gap-2 text-white items-center justify-center w-16'>
          <FaRegPaperPlane className='text-white text-xl' />
          <Link href='/' >Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar
