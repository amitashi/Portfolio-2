import Image from "next/image";
import React from "react";
import logo from "../public/icons8-amazon.svg";
import { motion } from "framer-motion";
type Props = {
  key: number;
  companylogo: string;
  companyname: string;
  startDate: string;
  endDate: string;
  role: string;
  experience: Array<string>;
};

const ExperienceCard = (props: Props) => {
  const { companylogo, companyname, startDate, endDate, role, experience } =
    props;
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-8 
    flex-shrink-0 w-[400px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#111319] px-10
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
          className="w-20 h-20 md:w-32 md:h-32 pt-4 mt-4 xl:mt-2 xl:pt-2 rounded-full object-cover object-center xl:w-[100px] xl:h-[100px]"
          width={400}
          height={400}
          src={companylogo}
          alt={companyname}
        />
      </motion.div>
      <div className="px-0 md:px-4 md:py-2">
        <h4 className="text-4xl font-light">{role}</h4>
        <p className="text-2xl font-bold mt-1">{companyname}</p>
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
          {startDate} --- {endDate}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-lg text-justify">
          <li>
            Orchestrated CI/CD pipelines on GitLab using GitOps principles,
            leveraging ArgoCD for declarative application deployments.
          </li>
          <li>
            Configured and managed Kubernetes clusters on AWS EKS, ensuring high
            availability and scalability for containerized applications.
          </li>
          <li>
            Designed and implemented scalable and highly available
            infrastructure on AWS using services such as EC2, S3, RDS, and VPCs.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
