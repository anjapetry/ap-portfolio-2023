'use client';

import React from 'react';
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import { FaPaperPlane } from 'react-icons/fa';


export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
    <motion.section
    id="contact"
    ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%, 38rem)] scroll-mt-28 text-center sm:mb-40"
    initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
     >
    <SectionHeading>Contact me</SectionHeading>
       <div className='w-max-[20rem] h-max-[24rem] bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-opacity/40 rounded-xl border-2 shadow-lg shadow-accent-1 p-8'>
       <p className="text-stone-700 -m-2">Please contact me directly at {' '}
        <a className="underline"
        href="mailto:github.71b2g@passmail.net">
            github.71b2g@passmail.net
        </a>
        {' '} or through this form.
       </p>

       <form className='mt-10 flex flex-col'>
        <input
        className="h-14 rounded-lg border-stone-950/10 p-4"
        type="email"
        placeholder="Your email" />
        <textarea
        className='h-52 my-3 rounded-lg border-stone-950/10 p-4'
        placeholder="Your message" />
        <button
        type="submit"
        className='group flex items-center justify-center gap-2 tracking-wider h-[3.25rem] w-[12rem] bg-stone-900 text-white rounded-full outline-none transition-all drop-shadow focus:scale-110 hover:scale-110 hover-bg-stone-950 active:scale-105 focus:ring-4 focus:ring-offset-2 focus:ring-cyan-500 hover:scale-105 m-2'
        >
        Send message
        <FaPaperPlane className=' text-xs transition-all opacity-70 inline-block ml-[0.5] w-5 h-6 mb-1 group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
       </form>
         </div>

    </motion.section>
  )
}
