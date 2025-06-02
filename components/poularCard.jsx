import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const poularCard = () => {
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
            <div className="popular-card group w-[270px] h-[320px] mb-4 mx-auto rounded-lg overflow-hidden relative font-['Jost']">
              {/* Image Container */}
              <div className="relative w-[250px] h-[300px]">
                <img
                  src={CardImage1}
                  alt="card"
                  className="w-[270px] h-[320px] object-cover"
                />

                {/* Overlay (appears on hover) */}
                {/* <div className="absolute inset-0 bg-black opacity-15 top-4 z-10"></div>
                <div className="absolute inset-0 bg-red-700 h-0 group-hover:h-[150px] transition-h duration-300 top-40  z-10"></div> */}
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                <h3 className="text-lg font-bold">Truffle Mushroom Risotto"</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="popular-card group w-[270px] h-[320px] mx-auto rounded-lg overflow-hidden relative font-['Jost']">
              {/* Image Container */}
              <div className="relative w-[250px] h-[300px]">
                <img
                  src={CardImage1}
                  alt="card"
                  className="w-[270px] h-[320px] object-cover"
                />

                {/* Overlay (appears on hover) */}
                {/* <div className="absolute inset-0 bg-black opacity-15 top-4 z-10"></div>
                <div className="absolute inset-0 bg-red-700 h-0 group-hover:h-[150px] transition-h duration-300 top-40  z-10"></div> */}
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                <h3 className="text-lg font-bold">Truffle Mushroom Risotto"</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="popular-card group w-[270px] h-[320px] mx-auto rounded-lg overflow-hidden relative font-['Jost']">
              {/* Image Container */}
              <div className="relative w-[250px] h-[300px]">
                <img
                  src={CardImage1}
                  alt="card"
                  className="w-[270px] h-[320px] object-cover"
                />

                {/* Overlay (appears on hover) */}
                {/* <div className="absolute inset-0 bg-black opacity-15 top-4 z-10"></div>
                <div className="absolute inset-0 bg-red-700 h-0 group-hover:h-[150px] transition-h duration-300 top-40  z-10"></div> */}
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                <h3 className="text-lg font-bold">Truffle Mushroom Risotto"</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="popular-card group w-[270px] h-[320px] mx-auto rounded-lg overflow-hidden relative font-['Jost']">
              {/* Image Container */}
              <div className="relative w-[250px] h-[300px]">
                <img
                  src={CardImage1}
                  alt="card"
                  className="w-[270px] h-[320px] object-cover"
                />

                {/* Overlay (appears on hover) */}
                {/* <div className="absolute inset-0 bg-black opacity-15 top-4 z-10"></div>
                <div className="absolute inset-0 bg-red-700 h-0 group-hover:h-[150px] transition-h duration-300 top-40  z-10"></div> */}
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                <h3 className="text-lg font-bold">Truffle Mushroom Risotto"</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </Carousel>
        </>
      ) : (
        <>
          {popular_card_data.map(
            ({ card_image, card_title, card_description }) => (
              <div key={card_title} className="popular-card w-[300px] h-[320px] rounded-lg overflow-hidden relative font-['Jost']">
                {/* Image Container */}

                <img
                  src={card_image}
                  alt="card"
                  className="w-[300px] h-[380px] object-cover"
                />

                {/* Content */}
                <div className="absolute bottom-0 z-20 flex flex-col justify-end hover:animate-fade-in-background-color w-full h-[120px] text-white">
                  <div className="relative w-full h-full p-6">
                    {/* Overlay (appears on hover) */}
                    {/* <div className="absolute bg-black bottom-0 left-0 z-10"></div>
                    <div className="absolute bg-red-700 h-0 hover:h-[150px] transition-h duration-300 bottom-0 left-0 z-10"></div> */}

                    <h3 className="text-lg font-bold">{card_title}</h3>
                    <p className="text-sm">{card_description}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </>
      )}
    </>
  )
}

export default poularCard
