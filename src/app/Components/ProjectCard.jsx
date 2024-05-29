import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl duration-500 hover:scale-105 sm:w-full ">
      <img src={imageUrl} alt={'sdghhshdj'} className="w-full h-auto object-cover rounded-lg " />
    </div>
  );
};

export default ProjectCard;
