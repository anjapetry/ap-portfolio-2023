"use client";

import React from 'react';
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header role="header" className="z-[999] relative">
        <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-2 border-teal-200 bg-emerald-50 bg-opacity-80 shadow-lg shadow-black/[0.25] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
        </motion.div>

      <nav role="navigation" className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul role="list" className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-sky-950 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
            <motion.li
            className="h-3/4 flex items-center justify-center relative"
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            >
            <Link
            className={clsx(
                'flex w-full items-center justify-center px-3 py-3 hover:font-bold hover:uppercase hover:underline-offset-1 transition-colors duration-300 ease-in-out',
                {
                'text-stone-950':
                activeSection === link.name,
              }
              )}
              href={link.hash}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-accent-1/30 dark:bg-accent-2/20 rounded-full border border-stone-950/70 absolute inset-0 -z-10 dark:bg-accent1/20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
              </motion.li>
            ))}
        </ul>
        </nav>
    </header>
    )
}
