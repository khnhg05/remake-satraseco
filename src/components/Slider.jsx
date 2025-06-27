"use client";
import React, {useState, useEffect} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videoData = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/hIVJWkwLYgY?si=usRZprvmNZPNImEx",
    title: "Video 1",
  },

  {
    id: 2,
    src: "https://www.youtube.com/embed/pvc9izATsDY?si=U0IpVOMi9qLYv14b",
    title: "Video 2",
  },

  {
    id: 3,
    src: "https://www.youtube.com/embed/hIVJWkwLYgY?si=usRZprvmNZPNImEx",
    title: "Video 3",
  },

  {
    id: 4,
    src: "https://www.youtube.com/embed/pvc9izATsDY?si=U0IpVOMi9qLYv14b",
    title: "Video 4",
  },

  {
    id: 5,
    src: "https://www.youtube.com/embed/hIVJWkwLYgY?si=usRZprvmNZPNImEx",
    title: "Video 5",
  },

  {
    id: 6,
    src: "https://www.youtube.com/embed/pvc9izATsDY?si=U0IpVOMi9qLYv14b",
    title: "Video 6",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videosPerPage] = useState(1);
  
  const maxIndex = videoData.length - videosPerPage ;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
  }

  const isDisabledLeft = currentIndex === 0;
  const isDisabledRight = currentIndex >= maxIndex;
  console.log(currentIndex);

  const AutoPlaySlider = 5000;
  useEffect (() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1 ) % videoData.length)
    }, AutoPlaySlider);

    return() => clearInterval(interval);
  }, []);
  return (
    <div className="Slider relative flex flex-col p-10 bg-gray-100">
      <div className="SlideElement aspect-video mx-auto transition-transform duration-500 ease-in-out">
        <iframe
          className="Video w-[60vw] aspect-video left-1/2"
          src={videoData[currentIndex].src}
          title={videoData[currentIndex].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className="Contents p-4">
          <p className="text-lg font-semibold text-gray-800 text-center">
            {videoData[currentIndex].title}
          </p>
        </div>
      </div>

      <div className="SliderButton mx-auto flex flex-row">
        <button 
          className={`SliderContainer ${!isDisabledLeft ? "cursor-pointer" : ""}`}
          onClick={prevSlide}
          disabled={isDisabledLeft}
        >
          <ChevronLeft
            size={24}
            className={currentIndex === 0 ? "text-gray-400" : "text-black"}
          />
        </button>

        <div className="Dots flex justify-center gap-2 mt-4">
          {videoData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button 
          className={`SliderRightButton ${!isDisabledRight ? "cursor-pointer" : ""}`}
          onClick={nextSlide}
          disabled={isDisabledRight}
        >
          <ChevronRight 
            size={24}
            className={currentIndex >= maxIndex ? "text-gray-400" : "text-black"}
          />
        </button>
      </div>



    </div>
  );
}
