import React from "react";
import img1 from "../assets/bg1.jpg";
import img2 from "../assets/bg2.png";
import img3 from "../assets/bg3.png";
import Carousel from "react-bootstrap/Carousel";
import "../css/Header.css";

const Header2 = () => {
  return (
    <div className="header">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="text-center contents">
        <div>
          <h1>WE ARE INVESTING IN THE FUTURE!</h1>
          <p>
            A trusted destination for traders worldwide investing in promising
            start-ups through high-end technology with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header2;
