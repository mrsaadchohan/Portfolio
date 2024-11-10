import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navlinks({ href, title, offset }: any) {
  return (
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
      className="text-white nav-link"
    >
      {title}
    </ScrollLink>
  );
}

export default Navlinks;
