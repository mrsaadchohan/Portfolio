import { DevicePhoneMobileIcon, MapIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
const Data = [
  {
    Image: FaPhoneAlt,
    heading: "Phone",
    text: "+92 3131287401",
    link: "/",
  },
  {
    Image: FaGithub,
    heading: "Github",
    text: "saadchohan",
    link: "https://github.com/mrsaadchohan",
  },
  {
    Image: FaLinkedin,
    heading: "Linkedin",
    text: "saad-chohan",
    link: "https://www.linkedin.com/in/saad-chohan/",
  },
  {
    Image: BiLogoGmail,
    heading: "Gmail",
    text: "saadchohan278",
    link: "mailto:saadchohan278@gmail.com",
  },
];
function Contact() {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading text-[#55e6a5]">Contact</h1>
      <div
        className="grid  border-b-[1px] pb-[6rem] pt-[5rem] border-gray-400 grid-cols-1 
        lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto gap-[3rem]"
      >
        {Data.map((item, id) => {
          return (
            <>
              <Link href={item.link}>
                <div
                  className="flex items-center space-x-6"
                  key={id}
                  id="Contacts"
                >
                  {/* <Link href={item.link}> */}
                  <div
                    className="p-5 flex items-center justify-center rounded-full
            bg-[#55e6a5]"
                  >
                    {<item.Image className="text-black w-[3rem] h-[3rem]" />}
                  </div>
                  <div>
                    <h2 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                      {item.heading}
                    </h2>
                    <p className="text-[17px] opacity-60 tracking-wider text-white">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
