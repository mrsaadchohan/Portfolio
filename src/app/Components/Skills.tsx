
import React from 'react'
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiSanity, SiTypescript } from 'react-icons/si';

const icons = [
  {
    icon: <FaHtml5 />,
    name: "HTML"
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS"
  },
  {
    icon: <IoLogoJavascript />,
    name: "Javascript"
  },
  {
    icon: <SiTypescript />,
    name: "Typescript"
  },
  {
    icon: <FaReact />,
    name: "React"
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js"
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS"
  },
  {
    icon: <SiSanity />,
    name: "Sanity"
  },
  {
    icon: <FaGithub />,
    name: "GitHub"
  },
];

function Skills() {
  return (
    <div className='lg:mt-28 mt-10'>
      <h1 className='text-center  text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 lg:text-5xl text-3xl'>
        Skills
      </h1>
      <div className='flex justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:gap-x-36 gap-x-28 gap-y-6 mt-10'>
      {icons.map((icon,id)=>
    {
        return(
            <div key={id}>
                
      
      
            <div className='flex flex-col  items-center '>
            <div className='text-7xl mb-4 text-white'>
                {icon.icon}
              </div>
            <p className='text-white text-center'>
                {icon.name}
            </p>
         </div>
      
      </div>
            
        )
    })}
      </div>
    </div>
    </div>
  )
}

export default Skills

