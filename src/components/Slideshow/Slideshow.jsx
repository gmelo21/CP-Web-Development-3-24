import React, { useState } from "react";
import "./slideshow.css";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const slides = [slide3, slide2, slide1];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slideshow">
      <SlArrowLeft className="nextSlide" onClick={prevSlide}></SlArrowLeft>

      <div className="slideImage">
        {slides.map((url) => (
          <img src={url} style={{ translate: `${-200 * currentIndex}%` }} />
        ))}
      </div>

      <SlArrowRight className="nextSlide" onClick={nextSlide}></SlArrowRight>
    </div>
  );
}

export default Slideshow;
