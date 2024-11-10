import Link from "next/link";
import React from "react";

const Data = [
 
  {
    title: "Movie Recommendation System",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7261078476747591680/",
    description: "Predicts laptop prices based on specifications using machine learning.",
  },
  {
    title: "Laptop Price Predictor",
    link: "https://www.linkedin.com/posts/saad-chohan_machinelearning-datascience-streamlit-activity-7248023976340271104-wq4n?utm_source=share&utm_medium=member_desktop",
    description: "Predicts laptop prices based on specifications using machine learning.",
  },
  {
    title: "Plant Image Classification",
    link: "https://www.linkedin.com/posts/saad-chohan_ai-deeplearning-cnn-activity-7252990734734163968-ZWaz?utm_source=share&utm_medium=member_desktop",
    description: "Classifies plant species from images with deep learning models.",
  },
  {
    title: "Face Mask Detection",
    link: "https://www.linkedin.com/posts/saad-chohan_deeplearning-cnn-facemaskdetection-activity-7255164003880984578-ZE7U?utm_source=share&utm_medium=member_desktop",
    description: "Detects whether a person is wearing a face mask in real-time.",
  },
  {
    title: "Email Spam Classifier",
    link: "https://www.linkedin.com/posts/saad-chohan_machinelearning-ai-spamdetection-activity-7245806701487017984-X6UK?utm_source=share&utm_medium=member_desktop",
    description: "Classifies emails as spam or not spam using NLP techniques.",
  },
  {
    title: "House Price Prediction",
    link: "https://www.linkedin.com/posts/saad-chohan_machinelearning-flask-datascience-activity-7242460366096547841-92Le?utm_source=share&utm_medium=member_desktop",
    description: "House Price Prediction usign Machine Learning.",
  },
];

function Projects() {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]" id="Project">
      <h1 className="heading text-[#55e6a5]">Projects</h1>
      <div className="w-[90%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
        {Data.map((data, id) => (
          <div key={id} className="flex flex-col justify-center items-center p-4 bg-[#f0ebeb] rounded-lg h-[150px]">
            <Link href={data.link} legacyBehavior>
              <a
                className="transform cursor-pointer hover:-translate-y-2 transition-all duration-300 
                text-[#02050a] text-lg font-semibold hover:text-[#55e6a5]"
              >
                {data.title}
              </a>
            </Link>
            <p className="text-[#555] mt-1 text-sm text-center">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
