"use client";
import PopularImage1 from "../public/signature-image1.png";
import SignatureImage1 from "../public/signature-image1.png";
import PopularImage2 from "../public/signature-image2.png";
import SignatureImage2 from "../public/signature-image2.png";
import PopularImage3 from "../public/signature-image3.png";
import SignatureImage3 from "../public/signature-image3.png";
import PopularBgImage from "../public/popular-bg.png";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "./ui/button";
import { useState } from "react";

const SignatureCard = () => {
 const features_data = [
    { id: 1, name: "Card 1" },
    { id: 2, name: "Card 2" },
    { id: 3, name: "Card 3" },
  ];

  const [likedCards, setLikedCards] = useState({});

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
        

  let signature_Card_data = [
    {
      image: SignatureImage1.src,
      title: "Best Beef Burger",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
      price: "$9.99",
    },
    {
      image: SignatureImage2.src,
      title: "ALFAREDO PASTA",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
      price: "$9.99",
    },
    {
      image: SignatureImage3.src,
      title: "DELICIOUS PIZZA",
      description:
        "A team of dreamers and doers building unique interactive music and art.",
      price: "$9.99",
    },
  ];
  return (
    <>
      {window.innerWidth <= 768 ? (
        <>
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            className="w-full  h-auto"
          >
            <div
              className="popular-card mx-auto w-[300px] h-[400px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-[#FFB300]"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full p-3 flex flex-col gap-5 items-center">
                <img
                  src={PopularImage1.src}
                  alt="card"
                  className="w-[270px] h-[230px]"
                />

                {/* Content */}
                <div className="flex flex-col justify-center gap-2 items-center w-full h-auto">
                  <h3 className="text-xl font-bold bg-white zilla uppercase text-[#FFB300]">
                    Best Beef Burger
                  </h3>
                  <p className="text-sm text-center text-white urbanist">
                    A team of dreamers and doers building unique interactive
                    music and art.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="popular-card mx-auto w-[300px] h-[400px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-[#FFB300]"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full p-3 flex flex-col gap-5 items-center">
                <img
                  src={PopularImage2.src}
                  alt="card"
                  className="w-[270px] h-[230px]"
                />

                {/* Content */}
                <div className="flex flex-col justify-center gap-2 items-center w-full h-auto">
                  <h3 className="text-xl font-bold bg-white zilla uppercase text-[#FFB300]">
                    ALFAREDO PASTA
                  </h3>
                  <p className="text-sm text-center text-white urbanist">
                    A team of dreamers and doers building unique interactive
                    music and art.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="popular-card mx-auto w-[300px] h-[400px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-[#FFB300]"
              style={{ backgroundImage: `url(${PopularBgImage.src})` }}
            >
              {/* Image Container */}
              <div className="w-full h-full p-3 flex flex-col gap-5 items-center">
                <img
                  src={PopularImage3.src}
                  alt="card"
                  className="w-[270px] h-[230px]"
                />

                {/* Content */}
                <div className="flex flex-col justify-center gap-2 items-center w-full h-auto">
                  <h3 className="text-xl font-bold bg-white zilla uppercase text-[#FFB300]">
                    DELICIOUS PIZZA
                  </h3>
                  <p className="text-sm text-center text-white urbanist">
                    A team of dreamers and doers building unique interactive
                    music and art.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </>
      ) : (
        <>
          {signature_Card_data.map(
            ({ image, title, description, price }, index) => (
              <div
                key={index}
                className="popular-card w-[360px] h-[470px] rounded-lg relative font-['Jost'] bg-cover bg-center bg-[#008141]"
                style={{ backgroundImage: `url(${PopularBgImage.src})` }}
              >
                {/* Image Container */}
                <div className="w-full h-full p-3 flex flex-col gap-5 text-white items-center ">
                  <div className="w-full h-auto flex" id="heart" onClick={() => toggleLike(index)}>
                   {likedCards[index] ? <IoMdHeart size={35} /> : <IoIosHeartEmpty size={35} />}
                  </div>
                  <img src={image} alt="card" className="w-[200px] h-[180px]" />

                  {/* Content */}
                  <div className="flex flex-col justify-center gap-2 items-center w-full h-auto">
                    <h3 className="text-xl font-bold zilla-slab-highlight uppercase text-white bg-[#008141]">
                      {title}
                    </h3>
                    <p className="text-sm text-center text-white urbanist">
                      {description}
                    </p>
                    <p className="text-lg text-white urbanist">
                      Price: {price}
                    </p>
                    <div className="button my-5">
                      <Button className="px-16 h-8 urbanist text-sm rounded-none bg-[#FFB300]">
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </>
      )}
    </>
  );
};

export default SignatureCard;
