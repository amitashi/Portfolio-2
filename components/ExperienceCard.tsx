import Image from "next/image";
import React from "react";
import logo from "../public/icons8-amazon.svg";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-8 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10
    hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      {/* <div className="h-10 w-10 border fill-white cursor-pointer" /> */}
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 pt-4 mt-4 xl:mt-2 xl:pt-2 rounded-full object-cover object-center xl:w-[150px] xl:h-[150px]"
          width={32}
          height={32}
          src={logo}
          alt=""
        />
      </motion.div>
      <div className="px-0 md:px-4 md:py-2">
        <h4 className="text-4xl font-light">Lead - Developer</h4>
        <p className="text-2xl font-bold mt-1">Amazon</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-4 w-4 rounded-full"
            width={4}
            height={4}
            src={logo}
            alt=""
          />
          <Image
            className="h-4 w-4 rounded-full"
            width={4}
            height={4}
            src={logo}
            alt=""
          />
          <Image
            className="h-4 w-4 rounded-full"
            width={4}
            height={4}
            src={logo}
            alt=""
          />
          <Image
            className="h-4 w-4 rounded-full"
            width={4}
            height={4}
            src={logo}
            alt=""
          />
        </div>
        <p className="uppercase pt-2 pb-4 text-gray-300">
          Service Start --- Service End
        </p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Service Summary Points SumarryService Summary</li>
          <li>Service Summary Points SumarryService Summary</li>
          <li>Service Summary Points SumarryService Summary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
