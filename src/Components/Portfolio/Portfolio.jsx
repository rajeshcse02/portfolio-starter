import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import virtualCalci from "../../img/virtualCalci.jpg";
import portfolio from "../../img/portfolio.jpg";
import ResumeGen from "../../img/ResumeGen.png";
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
            <a href="https://github.com/rajeshcse02/VirtualCalculator/">
            <img src={virtualCalci} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/rajeshcse02/portfolio-starter/">
            <img src={portfolio} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ResumeGen} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
