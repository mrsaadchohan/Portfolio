import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navlinks({ href, title, offset }) {
  return (
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
      className="block py-2 pl-3 pr-4 text-[#ADB7B3] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer" // Added cursor-pointer class
    >
      {title}
    </ScrollLink>
  );
}

export default Navlinks;
