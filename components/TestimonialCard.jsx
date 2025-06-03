'use client'
import React from "react";
import Slider from "react-slick";
import UserImage from "../public/user-image.png";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const TestimonialCard = ({sliderRef}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoScroll: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive : [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <div  className="w-full h-auto flex gap-3 justify-center items-center overflow-hidden">

    <Slider ref={sliderRef} {...settings} className="w-full relative h-[400px]">
      <div className="w-[420px] min-h-[200px] h-auto flex flex-col gap-5 justify-center items-center">
        <div className="userimage w-[120px] h-[120px] rounded-full mx-auto">
          <img
            src={UserImage.src}
            alt="user-profile-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="content w-full text-center h-auto gap-3 flex flex-col">
          <h3 className="staatliches font-normal text-[#008141] text-2xl capatalize">
            Robert Fox
          </h3>

          <p className="font-normal urbanist text-sm text-center sm:tracking-wide text-[#4B5563]">
            Lorem ipsum dolor sit amet consectetur. Odio suspendisse magna
            interdum placerat et. Eleifend odio ut tortor augue et in fringilla
            adipiscing.
          </p>
          <p className="font-normal urbanist text-sm sm:tracking-wide text-[#5f656d]">3/20/2025</p>
        </div>
      </div>
      <div className="w-[420px] min-h-[200px] h-auto flex flex-col gap-5 justify-center items-center">
        <div className="userimage w-[120px] h-[120px] rounded-full mx-auto">
          <img
            src={UserImage.src}
            alt="user-profile-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="content w-full text-center h-auto gap-3 flex flex-col">
          <h3 className="staatliches font-normal text-[#008141] text-2xl capatalize">
            Robert Fox
          </h3>

          <p className="font-normal urbanist text-sm text-center sm:tracking-wide text-[#4B5563]">
            Lorem ipsum dolor sit amet consectetur. Odio suspendisse magna
            interdum placerat et. Eleifend odio ut tortor augue et in fringilla
            adipiscing.
          </p>
          <p className="font-normal urbanist text-sm sm:tracking-wide text-[#5f656d]">3/20/2025</p>
        </div>
      </div>
      <div className="w-[420px] min-h-[200px] h-auto flex flex-col gap-5 justify-center items-center">
        <div className="userimage w-[120px] h-[120px] rounded-full mx-auto">
          <img
            src={UserImage.src}
            alt="user-profile-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="content w-full text-center h-auto gap-3 flex flex-col">
          <h3 className="staatliches font-normal text-[#008141] text-2xl capatalize">
            Robert Fox
          </h3>

          <p className="font-normal urbanist text-sm text-center sm:tracking-wide text-[#4B5563]">
            Lorem ipsum dolor sit amet consectetur. Odio suspendisse magna
            interdum placerat et. Eleifend odio ut tortor augue et in fringilla
            adipiscing.
          </p>
          <p className="font-normal urbanist text-sm sm:tracking-wide text-[#5f656d]">3/20/2025</p>
        </div>
      </div>
      <div className="w-[420px] min-h-[200px] h-auto flex flex-col gap-5 justify-center items-center">
        <div className="userimage w-[120px] h-[120px] rounded-full mx-auto">
          <img
            src={UserImage.src}
            alt="user-profile-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="content w-full text-center h-auto gap-3 flex flex-col">
          <h3 className="staatliches font-normal text-[#008141] text-2xl capatalize">
            Robert Fox
          </h3>

          <p className="font-normal urbanist text-sm text-center sm:tracking-wide text-[#4B5563]">
            Lorem ipsum dolor sit amet consectetur. Odio suspendisse magna
            interdum placerat et. Eleifend odio ut tortor augue et in fringilla
            adipiscing.
          </p>
          <p className="font-normal urbanist text-sm sm:tracking-wide text-[#5f656d]">3/20/2025</p>
        </div>
      </div>
    </Slider>
    </div>
  );
};

export default TestimonialCard;
