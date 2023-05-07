import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
motion;
type Props = {};

const Experience = (props: Props) => {
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
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
