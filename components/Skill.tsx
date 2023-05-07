import { motion } from "framer-motion";
import React from "react";
import htmlLogo from "../public/html_logo.svg";
import Image from "next/image";
motion;
type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          src={htmlLogo}
          alt="skill"
          className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28
          xl:w-32 xl:h-32 filter group-hover:grayscale duration-300 ease-in-out"
        />
      </motion.div>
      <div
        className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
       group-hove:bg:white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
