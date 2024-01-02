import Header from "./components/header";
import type { ReactNode } from "react";
import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font'
import ActiveSectionContextProvider from "./context/active-section-context";


interface LayoutProps {
  children: ReactNode;
}

const geistSans = GeistSans;

export const metadata: Metadata = {
  title: 'Anja Petry | Frontend Developer',
  description: 'Anja Petry is a self-taught and bootcamp trained frontend developer with two years experience based in the Hamburg region, Germany.',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="!smooth-scroll">
      <body className={`${geistSans.className} bg-bkg text-content relative pt-28 sm:pt-36 mx-auto h-[5000px] overflow-auto`}>
      <div className="sm:bg-accent-2 bg-accent-2 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[51.25rem] rounded-xl blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-accent-1/80 absolute top-[-11rem] -z-10 left-[-25rem] h-[31.25rem] w-[70rem] rounded-xl blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <div className="bg-accent-1/80 absolute bottom-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[51.25rem] rounded-xl blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="sm:bg-accent-2 bg-accent-2 absolute bottom-[-10rem] -z-10 left-[-25rem] h-[31.25rem] w-[50rem] rounded-xl blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <ActiveSectionContextProvider>
      <Header />
        {children}
      </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
