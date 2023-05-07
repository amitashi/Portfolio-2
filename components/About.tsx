import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl mx-auto px-10 justify-end md:justify-evenly  items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src="https://st3.depositphotos.com/1049680/34405/i/600/depositphotos_344057174-stock-photo-group-business-workers-working-together.jpg"
        className="mb-16 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] xl:mt-10"
      />
      <div className="space-y-8 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base pb-10 overflow-y-hidden">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore hic,
          doloremque obcaecati esse quis placeat ut sint fuga aliquid quibusdam,
          exercitationem praesentium doloribus alias a veritatis enim iste nulla
          velit! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ducimus cupiditate veniam modi et autem reiciendis laboriosam officia
          adipisci at incidunt, assumenda facere minima! Quasi id eaque iste,
          vero dolores beatae? Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
    </motion.div>
  );
};

export default About;
