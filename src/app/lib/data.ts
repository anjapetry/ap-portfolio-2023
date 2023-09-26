import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import traverseImg from "@/public/traverse.webp";
import reactFinanceImg from "@/public/react-finance.webp";
import wikiRocketImg from "@/public/nextjs-wikirocket.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Hamburg Area, Schleswig-Holstein",
    description:
      "I am currently skilling up to the full stack. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
    date: "2021 -2023",
  },
  {
    title:  "Frontend Developer Program Graduate at Opencampus.sh",
    location: " Kiel, Schleswig-Holstein",
    description:
      "After graduating from the Frontend Developer Program in August 2022, I continued to deepen and expand my new skills as a front-end developer.",
      icon: React.createElement(LuGraduationCap),

    date: "2021 - 2022",
  },
  {
    title: "Language Teacher (German and English as Second Language) at Institut Neo",
    location: "Geneva, Switzerland",
    description:
      "I taught German and English as a second language to children and adults.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Traverse",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: traverseImg,
  },
  {
    title: "Finance Landing Page",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: reactFinanceImg,
  },
  {
    title: "WikiRocket",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: wikiRocketImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "GitHub",
  "Jest",
  "AWS",
  "Figma",
  "Framer Motion",
  "Three.js",
] as const;