import { Bars3BottomLeftIcon, Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
// import {Link as ScrollLink} from 'react-scroll';
import Navlink from "./Navlink";
const Navlinks = [
  {
    link: "Home",
    target: "Hero",
    offset: -100,
  },
  {
    link: "Skills",
    target: "Skills",
    offset: -80,
  },
  {
    link: "About",
    target: "About",
    offset: -80,
  },
  {
    link: "Projects",
    target: "Project",
    offset: -60,
  },
  {
    link: "Contact",
    target: "Contacts",
    offset: -70,
  },
];

interface Props {
  openNav: () => void;
}
function Navbar({ openNav }: Props) {
  return (
    <div>
      <div className=" w-full fixed z-[1000] shadow-md top-0 h-[12vh] bg-[#141c27]">
        <div className="flex justify-between items-center w-[80%] mx-auto h-[100%]">
        
          <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
            Saad
            <span className="text-yellow-300">Chohan</span>
          </h1>
          
          {Navlinks.map((data, id) => {
            return (
              // <div >{data.link}</div>
              // <Link href={data.target} key={id} className='text-white nav-link'>{data.link}</Link>
              <>
                <div key={id}>
                  <Navlink
                    href={data.target}
                    title={data.link}
                    offset={data.offset}
                  />
                </div>
              </>
            );
          })}
          <div onClick={openNav}>
            <Bars3BottomLeftIcon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
