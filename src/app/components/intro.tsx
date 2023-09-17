/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                <Image src="/apetry.webp"
                    alt="Anja Petry portrait"
                    className='h-24 w-24 mx-auto overflow-hidden transition-shadow bg-no-repeat bg-cover object-cover border-4 border-teal-400 rounded-full shadow-xl shadow-amber-300/80'
                    width={192}
                    height={192}
                    quality="95"
                    priority={true}
                />
                </motion.div>
            <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            >
              👋
            </motion.span>
            </div>
          </div>


      <motion.h1
        className="mx-auto mt-16 mb-8 px-8 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Anja.</span> I'm a{" "}
        <span className="font-bold bg-gradient-to-r from-teal-500 via-red-600 to-[#010961] bg-clip-text text-transparent font-black no-underline hover:bg-gradient-to-tl hover:from-teal-500 hover:to-emerald-400 hover:bg-clip-text hover:scale-125 hover:lowercase drop-shadow-text-sm lg:drop-shadow-text-md tracking-wider uppercase transition-shadow shadow-sky-200">front-end web developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        crafting beautiful, accessible <span className="italic">websites & apps</span>. My focus is {" "}
        <span className="underline">React (Next.js) and tailwindcss</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
      <Link
      href="#contact"
      className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
        Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
      </Link>
      <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full border border-black/20 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-stone-700 hover:text-gray-950 flex items-center gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://linkedin.com/in/anjapetry"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-stone-700 flex items-center gap-2 text-[1.35rem] rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://github.com/anjapetry"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
    </motion.div>
    </section>
  );
}

