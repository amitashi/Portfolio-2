import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="relative h-screen flex flex-col text-left md:flex-row
    max-w-full justify-evenly items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center
          p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
            >
              <Image
                className="object-cover rounded-xl"
                src="https://cdn.create.vista.com/api/media/small/357057688/stock-photo-laptop-blank-screen-wood-table"
                alt=""
                width={300}
                height={300}
              />
            </motion.div>
            <div className="space-y-2 md:space-y-8 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                UPS Clone{" "}
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda molestias explicabo repellendus ratione at, fugit
                dolor a. Eum, porro! Enim mollitia rerum dolorum sequi. Itaque
                rem amet impedit provident vitae?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 lefft-0 h-[400px] -skew-y-12" />
    </div>
  );
};

export default Projects;
