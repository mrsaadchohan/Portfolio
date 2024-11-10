import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const Navlinks = [
  {
    link: "Home",
    target: "#Hero",
    // offset:-100,
  },
  {
    link: "Skills",
    target: "#Skills",
    // offset:-80,
  },
  {
    link: "About",
    target: "#About",
    //  offset:-80,
  },
  {
    link: "Projects",
    target: "#Project",
    //  offset:-60,
  },
  {
    link: "Contact",
    target: "#Contacts",
    //  offset:-70,
  },
];
interface Props {
  nav: boolean;
  closeNav: () => void;
}
function MobileNavbar({ nav, closeNav }: Props) {
  const Navanimation = nav ? "-translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${Navanimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0
    bg-[#09101a] z-[10000]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        {Navlinks.map((data, id) => {
          return (
            // <div key={id} className=''>{data.link}</div>
            <Link
              key={id}
              href={data.target}
              className="text-white nav-link-mobile"
            >
              {data.link}
            </Link>
          );
        })}
        <div
          onClick={closeNav}
          className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
        >
          <XMarkIcon />
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
