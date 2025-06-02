import React from "react";

const SubHeading = ({text}) => {
  return (
    <h3 className="lg:text-xl   md:text-2xl sm:text-xl xs:text-lg text-base font-normal urbanist text-[#008141]">
      {text}
    </h3>
  );
};

export default SubHeading;
