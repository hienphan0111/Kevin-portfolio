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
    <div className={styles.shadow}>
      <div className='h-100% rounded-xl'>
        <div className='-z-20 relative w-auto h-[50%]'>
          <Image
            src={bg1}
            className='-z-20'
          />
          {/* <div className='w-full bg-zinc-700 absolute'/> */}
        </div>
        <div className='w-100 h-auto text-white bg-zinc-800 flex flex-col items-center rounded-t-[40%] -mt-20'>
          <div className='-mt-20 z-20'>
            <Image
              src={heroImg}
              alt='profile'
              className='rounded-full w-[150px] h-[150px] '
            />
          </div>
          <h1 className='font-bold text-4xl'>Kevin Phan</h1>
          <p>Full stack developer</p>
          <div className='flex gap-4 rounded-t-2xl'>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
