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
  const [showVideo, setShowVideo] = useState(false); // Track if video is playing

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
    <>
      <section className="max-w-[1400px] py-24 px-6 md:px-12 mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-20">
          {/* Left side: Heading and Description */}
          <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
            <img
              className="w-6 md:w-8 mx-auto md:mx-0"
              src="/public/Shape.png"
              alt=""
            />
            <h1 className="text-xl md:text-5xl font-bold text-black text-center md:text-left max-w-md">
              {heading}
            </h1>
            <p className="text-gray-400 text-center md:text-left max-w-sm text-[16px] md:text-[20px]">
              {description}
            </p>

            <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
              <button
                onClick={prevSlide}
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
                disabled={isTransitioning}
              >
                <ChevronLeft className="text-black transition-all duration-300" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
                disabled={isTransitioning}
              >
                <ChevronRight className="text-black transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Right side: Image */}
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
        <div>
          <img
            className="w-full object-cover mt-6 mb-[-70px] md:mt-10"
            src="/Logos.png"
            alt="Logos"
          />
        </div>
      </section>

      {/*Video Section */}

      <div className="bg-gray-50 p-6 ">
        <div className="max-w-[1400px]  mx-auto flex flex-col justify-center items-center md:mt-16 space-y-8 ">
          {!showVideo ? (
            <div
              className="relative w-full max-w-[1200px] aspect-video cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://img.youtube.com/vi/6UCuWxWiMaQ/maxresdefault.jpg"
                alt="Video Thumbnail"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-[300px] md:h-[655px] "
              src="https://www.youtube.com/embed/6UCuWxWiMaQ?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}

export default Slider;
