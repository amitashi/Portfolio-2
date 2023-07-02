import React from "react";

type Props = {};

const EducationCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-8 
flex-shrink-0 w-[400px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#111319] px-10
hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden"
    ></article>
  );
};

export default EducationCard;
