import  Header from "./components/header";
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anja Petry | Frontend Developer',
  description: 'Anja Petry is a self-taught and bootcamp trained frontend developer with two years experience based in the Hamburg region, Germany.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cyan-100 text-slate-950 relative h-[5000px] pt-28 sm:pt-36`}>
      {/* <div className='isolate overflow-hidden bg-bg text-content sm:p-8'>
				<div className='relative m-auto flex min-h-screen before:absolute before:-z-10 before:h-1/2 before:w-3/4 before:animate-spin-slower before:rounded-bl-full before:rounded-tr-full before:bg-accent-2 before:blur-3xl after:absolute after:-z-10 after:h-2/3 after:w-2/3 after:animate-spin-slow after:rounded-bl-full after:rounded-tr-full after:bg-accent-1/80 after:blur-3xl'>
					<div className='absolute left-0 top-0 grid h-screen w-full place-content-center place-items-center gap-16 bg-teal-950/30'>
      */}
        <div className='bg-[#efb3b5] absolute top-[-6rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className="bg-[#aba5de] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <Header />
        {children}
       {/* </div>
        </div>
        </div>
        */}
      </body>
    </html>
  );
}
