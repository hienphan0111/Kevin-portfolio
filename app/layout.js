import './globals.css'
import { Inter } from 'next/font/google'
import { BackgroundAnimation, Hero, SideBar } from './components';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Kevin's portfolito",
  description: 'Overview about Kevin Phan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="flex min-h-screen flex-col py-10 items-center justify-center p-24">
        <BackgroundAnimation />
        <div className='relative flex max-h-[780px]'>
          <div className='w-[70%] h-full flex flex-col'>
            <Hero />
          </div>
          <div className='absolute top-0 -left-20'>
            <SideBar />
          </div>
          <div className='w-[60%] my-5 max-h-[600px] h-[600px] overflow-y-auto'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
