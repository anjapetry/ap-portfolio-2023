import React from 'react';
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");


  return (
    <section
    id="experience"
    ref={ref}
    className="scroll-mt-28 mb-28 sm:mb-40"
    >
    <SectionHeading>My experience</SectionHeading>
    <VerticalTimeline lineColor='' animate={ false }>
        {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
            <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "#bae6fd",
              boxShadow: "none",
              border: "1px solid  #facc15",
              textAlign: "left",
              padding: "1.3rem 2rem",
              borderRadius: "0.5rem",
              WebkitBoxShadow: "0 0 0 0.1rem #facc15",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #93c5fd",
            }}
            date={item.date}
            dateClassName="text-gray-700"
            icon={item.icon}
            iconStyle={{
              background: "#bbf7d0",
              fontSize: "1.5rem",
              border: "0.2rem solid #facc15",
              color: "#38bdf8",
            }}
            >
            <h3 className="font-semibold capitalize text-stone-950">{item.title}</h3>
            <p className="font-normal !mt-0 text-gray-700">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
            </React.Fragment>
            ))}
    </VerticalTimeline>
  </section>
  );
}
