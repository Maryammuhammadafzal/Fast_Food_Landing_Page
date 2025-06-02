import React from "react";

const Heading = ({text}) => {
  return (
    <h1 className="2xl:text-5xl md:text-4xl text-3xl md:leading-14 sm:leading-10 staatliches text-[#CE3A20]  leading-8 font-bold xl:leading-16">
      {text}
    </h1>
  );
};

export default Heading;
