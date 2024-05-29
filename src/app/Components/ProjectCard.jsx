import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ imageUrl }) => {
  return (
    <div className="bg-white rounded-xl duration-500 hover:scale-105 sm:w-full ">
      <Image src={imageUrl} alt={'Projects'} className="w-full h-auto object-cover rounded-lg " width={1200} height={700} />
    </div>
  );
};

export default ProjectCard;
