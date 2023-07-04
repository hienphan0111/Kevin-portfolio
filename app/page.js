import { BackgroundAnimation, SideBar } from './components'

export default function Home() {
  return (
    <main className="flex bg min-h-screen flex-col items-center justify-center p-24">
      <BackgroundAnimation />
      <SideBar />
      <h1 className='text-white'></h1>
    </main>
  )
}
