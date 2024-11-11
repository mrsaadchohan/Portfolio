import React from "react";
import Typeeffect from "./Typeanimation";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (textInView) {
      controlsText.start("visible");
    }
  }, [controlsText, textInView]);

  React.useEffect(() => {
    if (imageInView) {
      controlsImage.start("visible");
    }
  }, [controlsImage, imageInView]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="h-[95vh] bg-[#141c27]" id="Hero">
      <div className="w-[80%] grid grid-cols-1 mx-auto lg:grid-cols-2 gap-[3rem] h-[100%] items-center mt-14 ">
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={controlsText}
          variants={fadeInLeft}
        >
          
          <h1 className="text-[23px] md:text-[50px] text-white font-bold">
            I&apos;M <span className="text-yellow-400">SAAD CHOHAN</span>
          </h1>
          <Typeeffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92] text-justify">
          Aspiring AI Engineer with a focus on machine learning, deep learning, Python, and NLP.
          Passionate about computer vision and developing innovative AI solutions. Committed to continuous learning and professional growth in the AI field.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
{/*             <a href="/images/CV.pdf" download>
              <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center">
                <p>Download CV</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </a> */}
          </div>
        </motion.div>
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={controlsImage}
          variants={fadeInRight}
          className="lg:w-[500px] hidden lg:block mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src={"/images/u1.jpg"}
            alt="User"
            width={300}
            height={300}
            // layout="fill"
            // objectFit="contain"Y
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
