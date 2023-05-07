import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{
          display: "inline",
        }}
        animate={{
          display: "inline",
        }}
        transition={{
          duration: 1.5,
        }}
      >
        Loading....
      </motion.div>
    </div>
  );
};

export default Loader;
