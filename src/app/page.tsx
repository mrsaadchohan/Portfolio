import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import ProjectSection from "./Components/ProjectSection"
import Contact from "./Components/Contact"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-4 px-12 bg-[#121212]  ">
    <Navbar/>
    <div className="container mt-28 mx-auto px-12 py-8">
    <Hero/>
    <About/>
    <Skills/>
    <ProjectSection/>
    <Contact/>
    </div>

    
    
    </main>
  )}
