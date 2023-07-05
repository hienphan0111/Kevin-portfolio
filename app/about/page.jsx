
const About = () => {
  return (
    <div className='w-full h-full bg-zinc-800'>
      <div className="relative">
        <h1 className='font-bold text-xl p-7'><span className="text-yellow-500">A</span>bout me</h1>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-50 absolute top-6 left-2 opacity-60"></div>
      </div>
      <div className="border-gradient-y py-5 px-7 text-gray-300">
        <h2>Hello! I'm Kevin Phan.</h2>
        <p>I'm a Full stack developer from Da Nang, Viet Nam. I am responsible for designing and building complete web application from start to finish. This includes creating user interfaces, writing server side code, and managing databases. With my comprehensive knowledge of the entire web development process. I can efficiently turn ides into fully functional websites or applications. </p>
      </div>
    </div>
  )
}

export default About
