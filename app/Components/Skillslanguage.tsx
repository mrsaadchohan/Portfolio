import React from "react";

interface Props {
  skill: string;
}
function Skillslanguage({ skill }: Props) {
  return (
    <div className="relative mb-[3rem]">
      <h1
        className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[21px] font-bold
    tracking-[1px]"
      >
        {skill}
      </h1>
    </div>
  );
}

export default Skillslanguage;
