import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import avatar from "../public/imgdata/avatar.jpg";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, This is Priyanshu",
      "{loves-automation}",
      "Loves Iaas/Saas/Paas",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative flex flex-row justify-around items-center">
      <div className="flex flex-col space-y-8 items-center justify-center text-center h-screen">
        <BackgroundCircle />

        <motion.div>
          <Image
            className="relative rounded-full mx-auto object-cover border-[#a9afc3] border-4 h-32 w-32"
            src={avatar}
            alt="profile_pic"
          />
        </motion.div>

        <div className="z-20">
          <h2 className="text-lg font-bold uppercase text-[#a9afc3] tracking-[7px]">
            PRIYANSHU KATIYAR
          </h2>
          <h2 className="text-sm font-semibold uppercase text-[#a9afc3] pb-2 tracking-[15px]">
            Sr. DevOps Engineer
          </h2>
          <h2 className="text-4xl lg:text-5xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#f7abba" />
          </h2>
          <div className="pt-5">
            <Link href="about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
