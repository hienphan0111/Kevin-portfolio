import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import bg1 from '../assets/bg1.jpg';
import heroImg from '../assets/hero.jpg';
import styles from './styles.module.css';

const Hero = () => {
  return (
    <div className={`${styles.shadow} flex flex-col`}>
      <div className='rounded-xl flex flex-col shadow-2xl h-full'>
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
          <p>Full stack developer</p>
          <div className='flex gap-4 rounded-t-2xl pt-3'>
            <Link href='/'>
              <AiOutlineGithub />
            </Link>
            <Link href='/'>
              <AiFillLinkedin />
            </Link>
            <Link href='/'>
              <AiOutlineWhatsApp />
            </Link>
          </div>
          <div className='h-20'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
