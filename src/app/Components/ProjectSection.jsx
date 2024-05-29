import Link from "next/link"
import ProjectCard from "./ProjectCard"
import React from 'react'


const projectsdata=[
  {
    // id:1,
    title:"Hotel Management System",
    description: "Project 1 description",
    image:"/hotel.png",
    link:'https://www.linkedin.com/posts/saad-chohan_piaic-nextjs-sanity-activity-7189939533625344002-Fb8U?utm_source=share&utm_medium=member_desktop'

  },
  {
    // id:1,
    title:"Shoes Website",
    description: "Project 1 description",
    image:"/122.png",
    link:'https://shoes-one-omega.vercel.app/'
      
  },
  {
    // id:1,
    title:"Ecommerce",
    description: "Project 1 description",
    image:"/ecomm1.PNG",
    link:'https://www.linkedin.com/posts/saad-chohan_ecommerce-nextjs-sanity-activity-7197485431079239680-eged?utm_source=share&utm_medium=member_desktop'
    
  },
  {
    // id:1,
    title:"Ecommerce",
    description: "Project 1 description",
    image:"/pic1.PNG",
    link:'https://panaverse-dao-chi.vercel.app/'
    
  },
  {
    // id:1,
    title:"Ecommerce",
    description: "Project 1 description",
    image:"/gy1.PNG",
    link:'https://fitness-website-peach.vercel.app/'
    
  },
]
const ProjectSection=()=> {
  return (
    <div className='mt-24' id="projects">
       <h1 className='text-center text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 lg:text-5xl text-3xl'>
        Projects
      </h1>
      
      <div className="container mx-auto mt-11 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-6 ">
      {projectsdata.map((data,id)=>
      {
        return(
          <div key={id}>

        <Link href={data.link}>  
          <ProjectCard
          key={id}
          // key={data.id}
          title={data.title}
          description={data.description}
          imageUrl={data.image}
          // gitUrl={data.gitUrl}
          // previewUrl={data.previewUrl}
        />
        </Link>
        </div>
         )
      })}
     </div>
     </div>
     </div>
    
  )
}

export default ProjectSection

