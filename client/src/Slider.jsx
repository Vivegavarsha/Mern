import React, { useState } from 'react';
import './Slider.css';
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div id="slider">
      <input
        type="radio"
        name="slider"
        id="slide1"
        checked={currentSlide === 1}
        onChange={() => handleSlideChange(1)}
      />
      <input
        type="radio"
        name="slider"
        id="slide2"
        checked={currentSlide === 2}
        onChange={() => handleSlideChange(2)}
      />
      <input
        type="radio"
        name="slider"
        id="slide3"
        checked={currentSlide === 3}
        onChange={() => handleSlideChange(3)}
      />
      <input
        type="radio"
        name="slider"
        id="slide4"
        checked={currentSlide === 4}
        onChange={() => handleSlideChange(4)}
      />
      <div id="slides">
        <div id="overflow">
          <div className="inner">
            <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
              <div className="slide-content">
                <h2>Slide 1</h2>
                <p>Content for Slide 1</p>
              </div>
            </div>
            <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
              <div className="slide-content">
                <h2>Slide 2</h2>
                <p>Content for Slide 2</p>
              </div>
            </div>
            <div className={`slide ${currentSlide === 3 ? 'active' : ''}`}>
              <div className="slide-content">
                <h2>Slide 3</h2>
                <p>Content for Slide 3</p>
              </div>
            </div>
            <div className={`slide ${currentSlide === 4 ? 'active' : ''}`}>
              <div className="slide-content">
                <h2>Slide 4</h2>
                <p>Content for Slide 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="controls">
        <label htmlFor="slide1" onClick={() => handleSlideChange(1)}></label>
        <label htmlFor="slide2" onClick={() => handleSlideChange(2)}></label>
        <label htmlFor="slide3" onClick={() => handleSlideChange(3)}></label>
        <label htmlFor="slide4" onClick={() => handleSlideChange(4)}></label>
      </div>
      <div id="bullets">
        <label htmlFor="slide1" onClick={() => handleSlideChange(1)}></label>
        <label htmlFor="slide2" onClick={() => handleSlideChange(2)}></label>
        <label htmlFor="slide3" onClick={() => handleSlideChange(3)}></label>
        <label htmlFor="slide4" onClick={() => handleSlideChange(4)}></label>
      </div>
    </div>
  );
};

export default Slider;
