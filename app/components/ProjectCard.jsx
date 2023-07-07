'use client';

import Link from "next/link";
import { AiOutlineGithub } from 'react-icons/ai';
import { PiDevicesThin } from 'react-icons/pi';

const ProjectCard = ({ project }) => {
  const { id, name, description, img, github, demo, tech } = project
  return (
    <div className="text-gray-700">
      <img src={img} />
      <h2 className="font-bold text-xl py-3">{name}</h2>
      <p className="mb-3">{description}</p>
      <div className="flex gap-2">
        {
          tech.map((item) => (
            <span key={item} className="px-1 bg-green-500 text-gray-100 rounded-sm">{item}</span>
          ))
        }
      </div>
      <div className="flex gap-3 mt-5">
        <div className="bg-yellow-700 text-gray-200 px-4 rounded-md flex items-center gap-2">
          <AiOutlineGithub />
          <Link href={github} >Github</Link>
        </div>
        <div className="bg-yellow-700 flex gap-2 items-center py-1 text-gray-200 px-4 rounded-md">
          <PiDevicesThin />
          <Link href={demo} >Demo</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
