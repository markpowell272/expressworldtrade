import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/Testimonials.css";
// import img from '../assets/cryptobg.jpg'
import logo from "../assets/logo.png";
import { AiFillStar } from "react-icons/ai";
import img1 from "../assets/test1.png";
import img3 from "../assets/test3.jpg";
import img2 from "../assets/test2.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="owl-container">
        <h2>
          <span>
            WHAT PEOPLE <span style={{ color: "rgb(35, 201, 216)" }}>SAY</span>{" "}
            <br /> <img src={logo} width="100px" />
          </span>
        </h2>
        <OwlCarousel
          loop={true}
          items={1}
          responsiveRefreshRate={0}
          autoplay={true}
          smartSpeed={1000}
          autoplayTimeout={5000}
          autoplayHoverPause={true}
          // nav={true}
          // navText={
          //     [
          //         `<div class="prev"><</div>`,
          //         `<div class="next">></div>`
          //     ]
          // }
        >
          <div>
            <img
              className="img"
              src={img1}
              style={{
                width: "200px",
                height: "200px",
                margin: "auto",
                border: "3px solid rgb(35, 201, 216)",
              }}
              alt="graphics"
            />
            <h3>Mark Richard</h3>
            <strong>M.D at Middew PVT</strong>
            <div className="icon-cont">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>
              I decided to invest some dollars hoping i would get my profit as
              stated on the website. The intetresting part is when I saw my
              money growing I decided to pick up the platinum weekly plan. This
              is too real to be true. Then I was contacted by the admin to write
              a testimonial about the platform in wich I gladly did. This is
              real.
            </p>
          </div>
          <div>
            <img
              className="img"
              src={img3}
              style={{
                width: "200px",
                height: "200px",
                margin: "auto",
                border: "3px solid rgb(35, 201, 216)",
              }}
              alt="graphics"
            />
            <h3>Catherine K.</h3>
            <strong>Product Manager</strong>
            <div className="icon-cont">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>
              These guys are unbelievably amazing. At first, I was skeptical
              until I tried them out. I recommend them. Thum up to you guys.
            </p>
          </div>
          <div>
            <img
              className="img"
              src={img2}
              style={{
                width: "200px",
                height: "200px",
                margin: "auto",
                border: "3px solid rgb(35, 201, 216)",
              }}
              alt="graphics"
            />
            <h3>John Stone</h3>
            <strong>Business Analyst</strong>
            <div className="icon-cont">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>
              It is very easy to make investment on this site. They have
              different payment gateways that are secured and easy to use. I
              have also earned from their referral program. I upgraded my
              membership plan to Gold and it has been fun with lots of features
              added to my account. One thing I must say is that you don't need
              money to start making money from this site. Thanks.
            </p>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
