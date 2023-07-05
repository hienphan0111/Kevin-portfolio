import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-full bg-zinc-800'>
      <div className="relative">
        <h1 className='font-bold text-xl p-7'><span className="text-yellow-500">G</span>et in touch</h1>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-50 absolute top-6 left-2 opacity-60"></div>
      </div>
      <div className="border-gradient-y py-5 px-7 text-gray-300">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=da nang&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          <a href="https://thepasswordgame.com/">Password Game</a>
          </div>
        </div>
        <div className='py-7'>
          <ul className='grid grid-cols-2 text-sm gap-2'>
            <li className='uppercase'>Address: ... Da Nang, Viet Nam</li>
            <li className='uppercase'>Email: ... kevinphan@kevinphan.dev</li>
            <li className='uppercase'>Phone: ...(084) 938102461</li>
            <li className='uppercase'>Open to work: ...availible</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
