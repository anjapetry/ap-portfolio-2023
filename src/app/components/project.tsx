'use client';

import React, { useRef } from 'react';
import { projectsData } from '../lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    imageUrl,
    tags,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ['0 1', '1.33 1']
});
const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
       <motion.div
       ref={ref}
        style={{ 
            scale: scaleProgess,
            opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
       >
        <section className="max-w-[45rem] bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-opacity/40 bg-opacity-40 rounded-xl border border-accent-1/40 shadow-lg shadow-accent-2 hover:shadow-accent-1 p-2 mx-auto"
        >
            <div className=" bg-bkg text-content max-w-[42rem] h-auto border border-orange-500/50 rounded-lg overflow-hidden sm:pr-8 sm:p-2 mx-auto relative p-6 sm:h-[20rem] dark:group-hover:bg-gray-100 dark:group-hover:text-stone-950 transition">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-content dark:group-hover:text-stone-900">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag: string, index: number) => (
                    <li
                    className="bg-accent-2/[0.7] text-white group-hover:bg-accent-1 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full"
                    key={index}>
                        {tag}
                    </li>
                ))}
            </ul>
            </div>

            <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-105
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40'
            />
            </div>
        </section>
        </motion.div>
    );
}



