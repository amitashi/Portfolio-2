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
      <motion.div
        className="md:relative md:top-60  md:-left-10 text-sm sm:text-xl md:text-3xl font-bold text-[#111319] bg-slate-400 relative bottom-8 rounded-lg  md:rounded-full w-40 h-12 md:w-40 md:h-40 md:flex-shrink-0 text-center flex flex-row justify-center items-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
      >
        <span>4+ Years Experience</span>
      </motion.div>
      <div className="space-y-8 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <div className="text-base text-justify pb-10 overflow-y-hidden md:leading-normal md:text-xl">
          <ul>
            <li>
              Results-driven Senior DevOps Engineer with 4 years of experience
              in designing, implementing, and managing scalable infrastructure
              and CI/CD pipelines.
            </li>
            <br className="hidden md:inline-block"></br>
            <li>
              Proven expertise in AWS, Azure, Kubernetes, Docker, GitLab,
              GitHub, Terraform, Ansible, Jenkins, Azure DevOps, and GitOps
              using ArgoCD. Skilled in automating deployment processes,
              optimizing system performance, and ensuring continuous integration
              and delivery. Adept at collaborating with cross-functional teams
              to deliver high-quality, reliable, and secure software solutions
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
