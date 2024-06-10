import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import { carousalData } from "./carousalData";

const Carousal = () => {
  
  const [slidesToShow, setSlidesToShow] = useState(2);
    const [slidesToScroll, setSlidesToScroll] = useState(1);
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateSlidesToShow = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1220) setSlidesToShow(3);
            else if (screenWidth >= 820) setSlidesToShow(2);
            else if (screenWidth >= 600) setSlidesToShow(1);
            else {
                setSlidesToShow(1);
                setSlidesToScroll(1);
            }
        };
        updateSlidesToShow();
        window.addEventListener("resize", updateSlidesToShow);

        return () => {
            window.removeEventListener("resize", updateSlidesToShow);
        };
    }, []);

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      arrows: false,
    };

    const handlePrev = () => {
      sliderRef.current.slickPrev();
    };
  
    const handleNext = () => {
      sliderRef.current.slickNext();
    };

  return (
    <div className="slider-container">
      <button className="prev" onClick={handlePrev}>&lt;</button>
      <div className="slider-box">
          <Slider ref={sliderRef} {...settings} className="slider">
          {carousalData.map((box, index) => (
        <div className="box">
            <div key={index} className="box-item">
              <img src={box.img} />
              <div className="box-text">
                <h4>{box.header}</h4>
                <p>{box.description}</p>
              </div>
              <div className="boxLine" />
            </div>
          </div>
          ))}
        </Slider>
      </div>
      <button className="next" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousal;
