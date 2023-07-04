import Link from 'next/link';
import { BsSun } from 'react-icons/bs';
import { FaRegUser, FaRegListAlt, FaEye, FaRegPaperPlane } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div>listcategory
      <div className='flex items-center justify-center bg-slate-600 w-16 h-16'>
        <BsSun className='text-white text-3xl'/>
      </div>
      <div className='flex flex-col text-white items-center justify-center bg-slate-600 w-16'>
        <FaRegUser className='text-white text-3xl' />
        <Link href='/' >About</Link>
      </div>
      <div className='flex flex-col text-white items-center justify-center bg-slate-600 w-16'>
        <FaRegListAlt className='text-white text-3xl' />
        <Link href='/' >Skills</Link>
      </div>
      <div className='flex flex-col text-white items-center justify-center bg-slate-600 w-16'>
        <FaEye className='text-white text-3xl' />
        <Link href='/' >Projects</Link>
      </div>
      <div className='flex flex-col text-white items-center justify-center bg-slate-600 w-16'>
        <FaRegPaperPlane className='text-white text-3xl' />
        <Link href='/' >Contact</Link>
      </div>
    </div>
  )
}

export default SideBar
