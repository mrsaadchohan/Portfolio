"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import MobileNavbar from "./Components/MobileNavbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
// import Services from "./Components/Services";
// import Homed from "./Components/Services";
// import Services from "./Components/Services";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <>
      <div className="font-primary overflow-hidden">
        <MobileNavbar nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <Hero />
        <div className="relative z-30">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}
