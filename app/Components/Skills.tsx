import React from "react";
import Skillslanguage from "./Skillslanguage";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Python" },
  { name: "Machine Learning" },
  { name: "Deep Learning" },
  { name: "NLP" },
  { name: "Computer Vision" },
  { name: "Pandas" },
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-[2rem] md:pt-[3rem] pb-[3rem] bg-[#09101a]" id="Skills">
      <h1 className="heading text-[#55e6a5]">Skills</h1>
      <div className="w-[80%] mx-auto pt-[2rem] md:pt-[2rem] grid grid-cols-1 md:grid-cols-2 gap-x-[2rem] items-center">
        {skills.map((item, id) => (
          <motion.div
            key={id}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
          >
            <Skillslanguage skill={item.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
