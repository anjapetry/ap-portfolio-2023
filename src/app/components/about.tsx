'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '../lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
    ref={ref}
    className='mb-28 max-w-[45rem] text-stone-950 text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.125 }}
    id='about'

>
    <SectionHeading>About me</SectionHeading>
    <div className='w-max-[20rem] h-max-[24rem] bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-opacity/40 rounded-xl border-2 shadow-lg shadow-accent-1 p-8'>
    <p className="mb-3 text-xl">
        On returning to Germany after having lived abroad more than ten years {" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p className="mt-4 text-xl">
        <span className="italic">When Im not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. Im also
        learning how to play the guitar.
      </p>
      </div>
    </motion.section>
  )
}

