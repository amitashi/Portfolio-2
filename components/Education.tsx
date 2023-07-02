import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Education = (props: Props) => {
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
        Education
      </h3>
      <motion.div
        initial={{
          x: -100,
          size: 0,
        }}
        whileInView={{
          x: 0,
          size: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="relative w-[90%] overflow-hidden mx-auto text-lg z-20 text-[#111319] bg-[#a9afc3]/50 hover:bg-[#a9afc3] rounded-lg space-y-6 p-4 opacity-80 hover:opacity-100"
      >
        <AcademicCapIcon className="text-[#111319] h-7 w-0-7 inline-block" />{" "}
        <span className="font-bold tracking-widest underline decoration-[#dcdfe7]/50">
          Bachelor of Engineering:
        </span>
        <p>Golgotias University</p>
        <p>Compute Science</p>
      </motion.div>
      {/* <div className="absolute top-[5px] bg-[#b1b9c7] opacity-5 h-32 w-full"></div> */}
    </motion.div>
  );
};

export default Education;
