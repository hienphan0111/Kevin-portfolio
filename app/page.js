import { BackgroundAnimation, SideBar, Hero } from './components'

export default function Home() {
  return (
    <main className="flex bg min-h-screen flex-col py-10 items-center justify-center p-24">
      <BackgroundAnimation />
      <div className='relative'>
        <Hero />
        <div className='absolute top-0 -left-20'>
          <SideBar />
        </div>

      </div>
      <h1 className='text-white'></h1>
    </main>
  )
}