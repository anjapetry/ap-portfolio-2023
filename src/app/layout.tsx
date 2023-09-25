import  Header from "./components/header";
import ActiveSectionContextProvider from "./context/active-section-context";
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
    <html lang="en" className="!smooth-scroll">
      <body className={`${inter.className} bg-bkg text-content relative h-[5000px] pt-28 sm:pt-36 mx-auto overflow-auto`}>
      <div className="grid relative overflow-hidden before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10">
      <ActiveSectionContextProvider>
      <Header />
        {children}
      </ActiveSectionContextProvider>
      </div>
      </body>
    </html>
  );
}
