import React from "react";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import Link from "next/link";
const Contact = () => {
  const contact = [
    {
      icons: <FaPhoneAlt />,
      text: "+92 3131287401",
      link: "/",
    },
    {
      icons: <CgMail />,
      text: "Gmail",
      link: "mailto:saadchohan278@gmail.com",
    },
    {
      icons: <FaGithub />,
      text: "Github",
      link: "https://github.com/mrsaadchohan",
    },
    {
      icons: <FaLinkedin />,
      text: "Linkedin",
      link: "https://www.linkedin.com/in/saad-chohan/",
    },
  ];

  return (
    <div className="container mx-auto mt-16" id="contact">
      <h1 className="text-center text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 lg:text-5xl text-3xl">
        Contact
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 mt-12">
        {contact.map((data, id) => {
          return (
            <>
              <div key={id}>
                <Link href={data.link}>
                  <div className="flex flex-col  items-center">
                    <div className="text-3xl text-white rounded-full border p-8">
                      {data.icons}
                    </div>
                    <div>
                      <p className="text-white md:text-[1rem]  py-5 text-center">
                        {data.text}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
