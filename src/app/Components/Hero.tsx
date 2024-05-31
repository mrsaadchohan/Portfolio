"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-2xl md:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I am
                <br />
                <span className="">Saad Chohan</span>
              </span>
              <br />
              <TypeAnimation
                sequence={["Front End Developer", 1000, "Web Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg">
              Dynamic and responsive web applications with modern technologies.
            </p>
            <div>
              <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                <a href="#contact">Hire Me</a>
              </button>
              <button className="">
                <a
                  href="/SaadChohan.pdf"
                  download
                  className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 mt-3 text-white border border-white inline-block text-center"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0 sm:ml-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/hero.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
