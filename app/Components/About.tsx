
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]" id="About">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInLeft}
        >
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            About
          </h1>
          <h2
            className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] capitalize
            mb-[3rem font-bold text-white"
          >
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[2rem] mt-2 flex items-center md:space-x-0">
            <p className="text-[19px] text-slate-300 w-[80%] text-balance md:text-justify">
            An ambitious AI enthusiast specializing in machine learning, deep learning, natural language processing (NLP), and computer vision. With a solid foundation in Python programming and statistical analysis, I am developing a comprehensive skill set for AI engineering.


            </p>
          </div>
          <a href="/images/CV.pdf" download>
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </a>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInRight}
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src={"/images/about.jpg"}
            alt="User"
            // layout="fill"
            width={300}
            height={300}
            // objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
