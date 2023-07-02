import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import data from "../public/data/experience.js";
type Props = {};

const Experience = (props: Props) => {
  console.log(data);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex flex-left md:flex-row h-screen justify-evenly items-center overflow-hidden"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-400 text-2xl">
        Experience
      </h3>
      {/* <div className="h-10 w-10 border fill-white cursor-pointer" />
      <div className="h-20 w-10 border fill-white cursor-pointer" /> */}
      <div className="w-full  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {data.map((item, index) => (
          <ExperienceCard
            key={index}
            companyname={item.companyname}
            companylogo={item.companylogo}
            startDate={item.startDate}
            endDate={item.endDate}
            role={item.role}
            experience={item.experience}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
