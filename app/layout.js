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
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body suppressHydrationWarning={true} className="flex min-h-screen flex-col sm:py-0 md:py-10 items-center md:justify-center sm:p-1 md:p-24 md:overflow-hidden bg-slate-500">
        <BackgroundAnimation />
        <div className='relative w-full md:flex sm:flex-col md:flex-row max-h-[680px]'>
          <div className='sm:fixed md:absolute sm:left-0 top-0 md:-left-20'>
            <SideBar />
          </div>
          <div className='w-[100%] md:w-[70%] h-full flex flex-col'>
            <Hero />
          </div>
          <div className='md:w-[60%] sm:m-0 md:my-5 h-auto md:max-h-[600px] md:h-[600px] overflow-y-auto'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
