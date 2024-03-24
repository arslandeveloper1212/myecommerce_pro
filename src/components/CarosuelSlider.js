import React from "react";
import Slider from "react-slick";
import myImage from '../images/hero.jpg'; // Corrected image paths
import myImage2 from '../images/back.png'; // Corrected image paths
import myImage3 from '../images/hero.jpg'; // Corrected image paths
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarosuelSlider = () => {
  const settings = {
    dots: false, // Set dots to true to show navigation dots
    infinite: true,
    autoplay: true,
    speed: 1000, // Set speed to a reasonable value, e.g., 1000ms
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <div>
      <div className="d-sm-none d-lg-block d-md-block carouselslider_image_shown">
        <Slider {...settings}>

          <div>
            <img
              src={myImage2}
              alt="background-img"
              className="img-fluid"
              style={{ height: "60%", width: "100%", objectFit: "cover", backgroundRepeat: "no-repeat" }}
            />
          </div>
          <div>
            <img
              src={myImage2}
              alt="background-img"
              className="img-fluid "
              style={{ height: "100%", width: "100%", objectFit: "cover", backgroundRepeat: "no-repeat" }}
            />
          </div>
        </Slider>
      </div>

      <div className="mobile_carosuelSlider d-lg-none d-md-none d-sm-block">
        <div style={{ position: "relative" }}>
          <img
            src={myImage3}
            alt="background-img"
            className="img-fluid"
            style={{ height: "100%", width: "100%", objectFit: "cover", backgroundRepeat: "no-repeat" }}
          />
        </div>

      </div>

    </div>

  );
}

export default CarosuelSlider;
