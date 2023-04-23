import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import thailex from "../../img/thailex.png";
import portfolio from "../../img/portfolio.jpg";
import tshirt from "../../img/tshirt3d.png";
import "swiper/css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="Portfolio">
      <div className="portfolio">
        {/*heading*/}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <a href="https://github.com/rajeshcse02/vit-sympo-cse/">
            <img src={thailex} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/rajeshcse02/portfolio-starter/">
            <img src={portfolio} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img src={tshirt} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
