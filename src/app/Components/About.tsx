import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

function About() {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8 py-4 px-2 sm:py-8 sm:px-4 lg:py-12 lg:px-10 lg:items-center"
    >
      {/* Left side */}
      <div className="flex justify-center md:justify-start lg:ml-16">
        <Image
          src="/about-image.png"
          alt="About"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>
      {/* Right side */}
      <div className="mt-4 md:mt-0 lg:ml-16 text-center md:text-left">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl">
          About Me
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-5 sm:leading-6 md:leading-7 lg:leading-8 mt-4 md:mt-6 lg:mt-8 md:max-w-3xl max-w-md mx-auto md:mx-0">
          Passionate Next.js developer with a knack for building responsive,
          dynamic web applications. Proficient in HTML, CSS, JavaScript, and
          TypeScript, with advanced skills in React.js and Tailwind CSS.
          Experienced in integrating headless CMS solutions like Sanity. Adept
          at creating scalable and maintainable code. Committed to delivering
          high-quality, user-friendly digital solutions. Eager to leverage my
          skills in a collaborative and innovative development environment.
        </p>
      </div>
    </div>
  );
}

export default About;
