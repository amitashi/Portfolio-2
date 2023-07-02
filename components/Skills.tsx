import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
        justify-center space-y-4 xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-400 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-24 md:top-36 uppercase tracking-[3px] text-gray-400 text-sm">
        Hover Over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 ">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
