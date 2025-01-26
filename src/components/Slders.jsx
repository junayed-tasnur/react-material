import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

function Slider() {
  const slides = [
    {
      id: 1,
      heading: `"Make more time for the work that matters most"`,
      description: "Best software platform for running an internet business.",
      image: "/public/acrobatic.png",
    },
    {
      id: 2,
      heading: `"Build more time for the work that matters most"`,
      description: "Best software platform for running an internet business.",
      image: "/public/rocket2.png",
    },
    {
      id: 3,
      heading: `"Take more time for the work that matters most"`,
      description: "Best software platform for running an internet business.",
      image: "images.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Track if a transition is in progress

  const prevSlide = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500); // Delay of 0.5 seconds
  };

  const nextSlide = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500); // Delay of 0.5 seconds
  };

  const { heading, description, image } = slides[currentIndex];

  return (
    <section className="max-w-[1400px] py-24 px-6 md:px-12 mx-auto">
      <div className="flex flex-col justify-between md:flex-row items-center gap-20">
        {/* left side */}
        <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
          <img className="w-6 md:w-8" src="/public/Shape.png" alt="" />
          <h1 className="text-2xl md:text-5xl font-bold text-black max-w-md">
            {heading}
          </h1>
          <p className="text-gray-400 max-w-sm text-[20px]">{description}</p>

          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={prevSlide}
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
              disabled={isTransitioning} // Optional: Disable button during transition
            >
              <ChevronLeft className="text-black transition-all duration-300" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
              disabled={isTransitioning} // Optional: Disable button during transition
            >
              <ChevronRight className="text-black transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className={`w-full md:w-[65%] object-cover transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            src={image}
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
        <img className="w-full object-cover" src="/Logos.png" alt="" />
      </div>
    </section>
  );
}

export default Slider;
