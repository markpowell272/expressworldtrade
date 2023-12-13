import React, { useState } from "react";
import Background from "../components/Background";
import "../css/General2.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import { GiCheckMark } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";
// import Modals from "../components/Modalinveststarter.js.js";

// const InvestmentPackage = ({ modal, openModal }) => {
//   return (
//     <>
//       <Helmet>
//         <title>ET-Options | Investment Package</title>
//       </Helmet>
//       <Nav />
//       <div className="general-container2">
//         <Background text="INVESTMENT PACKAGE" />
//         <div className="body investment">
//           <div className="plan-box">
//             <h3>STARTER</h3>
//             <div>
//               <h6>300.00 USD - 75000.00 USD</h6>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Commission - 150%
//               </p>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Repeat - 1 times
//               </p>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Compound - Weekly
//               </p>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Term - Monthly
//               </p>
//               <p className="last">
//                 <Link to="/investment/Starter Plan">
//                   <FaTelegramPlane />
//                   &nbsp;Invest Under This Package
//                 </Link>
//               </p>
//             </div>
//           </div>
//           <div className="plan-box">
//             <h3>SILVER</h3>
//             <div>
//               <h6>75000.00 USD - 100000.00 USD</h6>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Commission - 200%
//               </p>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Repeat - 1 times
//               </p>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Compound - Weekly
//               </p>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Term - Monthly
//               </p>
//               <p className="last">
//                 <Link to="/investment/Silver Plan">
//                   <FaTelegramPlane />
//                   &nbsp;Invest Under This Package
//                 </Link>
//               </p>
//             </div>
//           </div>
//           <div className="plan-box">
//             <h3>GOLD</h3>
//             <div>
//               <h6>100000.00 USD - 1250000.00 USD</h6>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Commission - 300%
//               </p>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Repeat - 1 times
//               </p>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Compound - Weekly
//               </p>
//               <p>
//                 <GiCheckMark />
//                 &nbsp;Term - Monthly
//               </p>
//               <p className="last">
//                 <Link to="/investment/Gold Plan">
//                   <FaTelegramPlane />
//                   &nbsp;Invest Under This Package
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InvestmentPackage;

// import React from "react";
import "../css/Plan.css";
import { FaRegStarHalf, FaRegStar } from "react-icons/fa";
import { BsStarHalf, BsStarFill } from "react-icons/bs";

const InvestmentPackage = ({ modal, openModal }) => {
  return (
    <>
      <Helmet>
        <title>ET-Options | Investment Package</title>
      </Helmet>
      <Nav />
      <div className="general-container2">
        <Background text="INVESTMENT PACKAGE" />
      </div>
      <div className="plan-container mb-5">
        <h2>
          <span>OUR PLANS</span>
        </h2>
        <div className="plan">
          <div className="plan-box">
            <div className="my-3 icon">
              <FaRegStarHalf />
            </div>
            <div className="plan-type">
              <h4>MINI</h4>
              <p>25%</p>
            </div>
            <div>
              <p>$300 - $2999</p>
              <p>PAID 10 TIMES</p>
              <p>DAILY 25</p>
            </div>
            <Link to="/investment/Mini Plan">
              <FaTelegramPlane />
              &nbsp;INVEST
            </Link>
          </div>
          <div className="plan-box">
            <div className="my-3 icon">
              <FaRegStar />
            </div>
            <div className="plan-type">
              <h4>SILVER</h4>
              <p>35%</p>
            </div>
            <div>
              <p>$3000 - $49999</p>
              <p>PAID 10 TIMES</p>
              <p>DAILY 35</p>
            </div>
            <Link to="/investment/Silver Plan">
              <FaTelegramPlane />
              &nbsp;INVEST
            </Link>
          </div>
          <div className="plan-box">
            <div className="my-3 icon">
              <BsStarHalf />
            </div>
            <div className="plan-type">
              <h4>GOLD</h4>
              <p>45%</p>
            </div>
            <div>
              <p>$50000 - $99999</p>
              <p>PAID 10 TIMES</p>
              <p>DAILY 45</p>
            </div>
            <Link to="/investment/Gold Plan">
              <FaTelegramPlane />
              &nbsp;INVEST
            </Link>
          </div>
          <div className="plan-box">
            <div className="my-3 icon">
              <BsStarFill />
            </div>
            <div className="plan-type">
              <h4>PLATINUM</h4>
              <p>55%</p>
            </div>
            <div>
              <p>$100000 - $600000</p>
              <p>PAID 10 TIMES</p>
              <p>DAILY 55</p>
            </div>
            <Link to="/investment/Platinum Plan">
              <FaTelegramPlane />
              &nbsp;INVEST
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentPackage;
