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

export default function Home() {
  return (
    <>
      <div
        className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
     scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
      >
        <Head>
          <title>Amit's Portfolio</title>
        </Head>

        <Header />
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
              src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/scroll-to-top.png?fit=1200%2C600&ssl=1"
              alt="logo"
              height={10}
              width={10}
            />
          </div>
        </footer>
      </Link> */}
      </div>
    </>
  );
}
