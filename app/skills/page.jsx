import {
  BiLogoRedux,
  BiLogoReact,
  BiLogoJavascript,
  BiSolidFileCss,
  BiLogoHtml5,
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiCodeAlt,
} from 'react-icons/bi';
import { SiRuby, SiNextdotjs, SiNodedotjs, SiRubyonrails } from 'react-icons/si';

const Skill = () => {
  return (
    <div className='w-full h-full bg-zinc-800 pb-5'>
      <div className='relative'>
        <h1 className='font-bold text-xl p-7 text-gray-100'>
          <span className='text-yellow-500'>S</span>kills
        </h1>
        <div className='w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-50 absolute top-6 left-2 opacity-60'></div>
      </div>
      <div className='border-gradient-y py-5 px-7 text-gray-300'>
        <h2 className='w-2xl h-2xl py-3 font-bold flex items-center'>
          <BiCodeAlt className='w-10 h-10 p-1 border border-yellow-400 font-bold rounded-full text-yellow-400'/>
          <p className='px-2 text-lg uppercase'>Coding</p>
        </h2>
        <ul className='grid grid-cols-2 gap-3 text-lg'>
          <li className='flex gap-2 items-center'><BiLogoHtml5 />HTML5</li>
          <li className='flex gap-2 items-center'><BiLogoJavascript />Javascript</li>
          <li className='flex gap-2 items-center'><BiLogoReact />React</li>
          <li className='flex gap-2 items-center'><BiLogoRedux />Redux</li>
          <li className='flex gap-2 items-center'><BiLogoTailwindCss />TailwindCSS</li>
          <li className='flex gap-2 items-center'><BiSolidFileCss />CSS</li>
          <li className='flex gap-2 items-center'><BiLogoPostgresql />PortgreSQL</li>
          <li className='flex gap-2 items-center'><BiLogoMongodb />MongoDB</li>
          <li className='flex gap-2 items-center'><SiNextdotjs />NextJS</li>
          <li className='flex gap-2 items-center'><SiNodedotjs />NodeJS</li>
          <li className='flex gap-2 items-center'><SiRuby />Ruby</li>
          <li className='flex gap-2 items-center'><SiRubyonrails />Ruby on Rails</li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
