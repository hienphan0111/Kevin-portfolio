'use client';

import { useState } from 'react';
import { ProjectCard } from '../components';
import { projects } from '../data/projects';

const Project = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentPrj, setCurrentPrj] = useState({});

  const handlePrj = (id) => {
    setOpenModal(true);
    const proj = projects.find((item) => item.id === id);
    setCurrentPrj(proj);
  }

  return (
    <div className='w-full bg-zinc-800 h-full'>
      <div className="relative bg-zinc-800">
        <h1 className='font-bold text-xl p-7 text-gray-100'><span className="text-yellow-500">P</span>rojects</h1>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-50 absolute top-6 left-2 opacity-60"></div>
      </div>
      <div className="relative border-gradient-y grid grid-cols-2 gap-4 py-10 px-7 text-gray-300 bg-zinc-800">
        <div className='absolute h-full left-[50%] border-gradient-r' />
        {
          projects.map((pro) => (
            <div key={pro.id} className='flex flex-col items-center gap-2'>
              <div className='relative bg-slate-200 cursor-pointer' onClick={() => handlePrj(pro.id)}>
                <div className='w-full h-full absolute hover:bg-gradient-to-r from-yellow-100 to-yellow-50 opacity-30 transition ease-in-out duration-150' />
                <div className='transition ease-out duration-300 hover:scale-0.5'>
                  <img src={pro.img} alt="project-img" className='p-3' />
                </div>
              </div>
              <h2 className='mt-2 font-bold'>{pro.name}</h2>
              {openModal ? (
                <div className="flex justify-center items-center backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative min-w-4xl my-6 mx-auto max-w-5xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-end p-5 border-b border-solid border-gray-300 rounded-t ">
                        <button
                          type="button"
                          className="bg-transparent border-0 text-black float-right"
                          onClick={() => setOpenModal(false)}
                        >
                          <span className="text-black opacity-7 h-6 w-6 text-xl block">
                            x
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <ProjectCard project={currentPrj} />
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => setOpenModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Project
