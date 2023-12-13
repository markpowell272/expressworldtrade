import React from "react";
import "../css/Plan.css";
import { Link } from "react-router-dom";
import { FaRegStarHalf, FaRegStar } from "react-icons/fa";
import { BsStarHalf, BsStarFill } from "react-icons/bs";

const Plan = () => {
  return (
    <div className="plan-container">
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
          <Link>INVEST</Link>
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
          <Link>INVEST</Link>
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
          <Link>INVEST</Link>
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
          <Link>INVEST</Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;
