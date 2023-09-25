"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-stone-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-bkg border border-accent-1/50 text-stone-950 rounded-xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-500 via-white to-fuchsia-600 hover:from-pink-500 hover:to-yellow-500 px-5 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-accent-1/40"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
            once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
