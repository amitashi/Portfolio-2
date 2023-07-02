import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  ArrowDownOnSquareIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
// import CV from "../public/data/Priyanshu_CV.pdf";
import moon from "../public/moon.svg";
import sun from "../public/sun.svg";

type Props = {
  darkTheme: boolean;
  setDarkTheme: (value: boolean) => void;
};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row justify-between items-center space-x-4"
      >
        {/* social icons */}

        <SocialIcon
          url="https://www.github.com"
          fgColor={props.darkTheme ? "#a9afc3" : "#32343a"}
          bgColor="transparent"
          className={`headericons ${
            props.darkTheme ? "hoverSocialIconDark" : "hoverSocialIconLight"
          }`}
        />
        <SocialIcon
          url="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHlpBqQn5l6NQAAAYkXRdmo-FvH0EbA-a0PiVXU_Q0ETj8uOPmJLcZt6pnJ45PqQhu95Qanr4gVG9Jp1A36ZfsPUhvD8I1z46CnxveKZUe2mrqIIsGTnYG-m9wtVhxvSiMOr5s=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fcontactpriyanshu"
          fgColor={props.darkTheme ? "#a9afc3" : "#32343a"}
          bgColor="transparent"
          className={`headericons ${
            props.darkTheme ? "hoverSocialIconDark" : "hoverSocialIconLight"
          }`}
        />
        <SocialIcon
          url="https://www.instagram.com"
          fgColor={props.darkTheme ? "#a9afc3" : "#32343a"}
          bgColor="transparent"
          className={`headericons ${
            props.darkTheme ? "hoverSocialIconDark" : "hoverSocialIconLight"
          }`}
        />
        <SocialIcon
          network="email"
          url="/contact"
          fgColor={props.darkTheme ? "#a9afc3" : "#32343a "}
          bgColor="transparent"
          className={`headericons ${
            props.darkTheme ? "hoverSocialIconDark" : "hoverSocialIconLight"
          }`}
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row justify-center items-center space-x-10"
      >
        <div
          className={`${
            props.darkTheme
              ? "bg-[#212327] text-[#f6f7f9]"
              : "bg-[#e5e7ed] text-[#32343a]"
          } rounded-lg p-2 font-bold hover:cursor-pointer hover:scale-110`}
        >
          <Link href="/data/Priyanshu_CV.pdf" download="Priyanshu_CV">
            <span className={props.darkTheme ? "darktext" : "lightext"}>
              Download CV{" "}
              <ArrowDownOnSquareIcon
                className={`headericons ${
                  props.darkTheme
                    ? "bg-[#212327] text-[#f6f7f9]"
                    : "bg-[#e5e7ed] text-[#32343a]"
                }
                } `}
              />
            </span>
          </Link>
        </div>

        <button
          className={`${
            props.darkTheme
              ? "bg-[#212327] text-[#f6f7f9]"
              : "bg-[#e5e7ed] text-[#32343a]"
          } rounded-lg p-2 font-bold hover:cursor-pointer hover:scale-110`}
          onClick={() => props.setDarkTheme(!props.darkTheme)}
        >
          {!props.darkTheme ? (
            <MoonIcon
              className={`headericons ${
                props.darkTheme
                  ? "bg-[#212327] text-[#f6f7f9]"
                  : "bg-[#e5e7ed] text-[#32343a]"
              }
            } `}
            />
          ) : (
            <SunIcon
              className={`headericons ${
                props.darkTheme
                  ? "bg-[#212327] text-[#f6f7f9]"
                  : "bg-[#e5e7ed] text-[#32343a]"
              }
            } `}
            />
          )}
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
