import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import { useState } from "react";
import avatar from "../public/imgdata/avatar.jpg";
import Education from "../components/Education";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  const darkThemeClass =
    "bg-[#111319] text-[#a9afc3] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a9afc3]/80";
  const lighThemeclass =
    "bg-[#f5f8fc] text-[#7e7e7e] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a9afc3]/80";

  return (
    <>
      <div className={darkTheme ? darkThemeClass : lighThemeclass}>
        <Head>
          <title>Priyanshu's Portfolio</title>
        </Head>

        <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        {/* <Loader /> */}
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experience" className="snap-center">
          <Experience />
        </section>

        {/* education */}
        {/* <section id="education" className="snap-center">
          <Education />
        </section> */}

        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
        {/* <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                className="h-10 w-10 rounded-full filter grayscal hover:grayscale-0"
                src={avatar}
                alt="logo"
              />
            </div>
          </footer>
        </Link> */}
      </div>
    </>
  );
}
