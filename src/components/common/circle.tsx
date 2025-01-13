"use client"
//Framer
import {motion} from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [2, 0.5, 1],
        opacity: [0.3, 0.6, 1],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="absolute hidden md:inline-flex opacity-80 border-accent border-2 rounded-full md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] md:mt-96 animate-ping" />
      <div className="absolute hidden md:inline-flex opacity-20 border-accent border-[3px] rounded-full md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] md:mt-[23rem] animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;