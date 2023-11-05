'use client';

import React from 'react';
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import SubmitBtn from "./submit-btn";

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
       <p className="text-stone-900 -m-2">Please contact me directly at {' '}
        <a className="underline"
        href="mailto:github.71b2g@passmail.net">
            github.71b2g@passmail.net
        </a>
        {' '} or through this form.
       </p>

       <form className='mt-10 flex flex-col'>
        <input
        className="h-14 rounded-lg border-stone-950/10 p-4 text-stone-900"
        type="email"
        name='email'
        required
        maxLength={500}
        placeholder="Your email"
        />
        <textarea
        className='h-52 my-3 rounded-lg border-stone-950/10 p-4'
        required
        name='message'
        maxLength={500}
        placeholder="Your message" />
       <SubmitBtn />
      </form>
        </div>

    </motion.section>
  )
}
