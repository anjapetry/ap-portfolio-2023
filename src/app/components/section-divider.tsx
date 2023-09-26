"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
    className='w-full flex justify-center items-center'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.125 }}
    >

  <div className='my-24 w-[33px] h-[64px] rounded-3xl border-2 border-fuchsia-700 sm:block p-2'>
    <motion.div
      animate={{
        y: [0, 24, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className='w-3 h-3 rounded-full border-teal-500 mb-1 border bg-cyan-400'
    >
    </motion.div>
    </div>
    </motion.div>
);
}

