import './globals.css'
import { Inter } from 'next/font/google'
import { Hero, SideBar } from './components';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Kevin's portfolito",
  description: 'Overview about Kevin Phan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg min-h-screen flex-col py-10 items-center justify-center p-24">
        
        <div className='relative'>
          <Hero />
          <div className='absolute top-0 -left-20'>
            <SideBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
