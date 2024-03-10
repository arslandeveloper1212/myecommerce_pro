import React from "react";
import Slider from "react-slick";
import myImage from '../images/backg.jpg'; // Corrected image paths
import myImage2 from '../images/back.png'; // Corrected image paths
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarosuelSlider = () => {
  const settings = {
    dots: true, // Set dots to true to show navigation dots
    infinite: true,
    autoplay: true,
    speed: 1000, // Set speed to a reasonable value, e.g., 1000ms
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
    
      <div>
        <img
          src={myImage2}
          alt="background-img"
          className="img-fluid"
          style={{ height: "100%", width: "100%", objectFit: "cover",backgroundRepeat:"no-repeat" }}
        />
      </div>
      <div>
        <img
          src={myImage2}
          alt="background-img"
          className="img-fluid"
          style={{ height: "100%", width: "100%", objectFit: "cover",backgroundRepeat:"no-repeat" }}
        />
      </div>
    </Slider>
  );
}

export default CarosuelSlider;
