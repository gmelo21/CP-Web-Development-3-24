import React, { useState, useEffect } from "react";
import "./slideshow.css";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const slides = [slide3, slide2, slide1];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);

  useEffect(() => {
    let slideInterval;

    if (isAutoAdvancing) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => clearInterval(slideInterval);
  }, [isAutoAdvancing, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoAdvancing(false);
  };

  return (
    <div className="slideshow">
      <SlArrowLeft
        className="nextSlide"
        onClick={() => {
          prevSlide();
          setIsAutoAdvancing(false);
        }}
      />

      <div className="slideImage">
        {slides.map((url) => (
          <img
            key={url}
            src={url}
            style={{ translate: `${-200 * currentIndex}%` }}
          />
        ))}
      </div>

      <SlArrowRight
        className="nextSlide"
        onClick={() => {
          nextSlide();
          setIsAutoAdvancing(false);
        }}
      />

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
