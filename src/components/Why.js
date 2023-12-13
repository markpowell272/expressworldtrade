import React from "react";
import "../css/General.css";
import "../css/Why.css";
import {
  MdOutlineSecurity,
  MdOutlineScreenSearchDesktop,
  MdOutlineSupportAgent,
} from "react-icons/md";

import { FaNetworkWired, FaWallet } from "react-icons/fa";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const Why = () => {
  return (
    <div className="general-container mt-4" id="full-screen">
      <div className="body ">
        <h3 className="text-center mb-5 text-light">WHY CHOOSE US?</h3>
        <div className="why-divs">
          <div>
            <div className="icon">
              <MdOutlineSecurity />
            </div>
            <h5>DATA SECURITY</h5>
            <p>
              We do our best to protect clients' funds and guarantee, security
              of all personal information, thanks to the modern systems of data
              protection
            </p>
          </div>
          <div>
            <div className="icon">
              <MdOutlineScreenSearchDesktop />
            </div>
            <h5>USER-FRIENDLY INTERFACE</h5>
            <p>
              The company provides its clients with a user-friendly interface.
              The personal area is simple and clear, basic information and
              buttons are placed on the main page.
            </p>
          </div>
          <div>
            <div className="icon">
              <MdOutlineSupportAgent />
            </div>
            <h5>24/7 SUPPORT</h5>
            <p>
              Сlients can contact our support specialists seven days a week. We
              are ready to answer all your questions and solve any of your
              problems quickly and efficiently.
            </p>
          </div>
          <div>
            <div className="icon">
              <FaNetworkWired />
            </div>
            <h5>STRONG NETWORK</h5>
            <p>
              Our financial team work around the clock to ensure your funds are
              released not more than 24hour after request.
            </p>
          </div>
          <div>
            <div className="icon">
              <CgArrowsExchangeAltV />
            </div>
            <h5>INSTANT EXCHANGE</h5>
            <p>
              We accept several payment method just to make it convinient while
              funding and paying out.
            </p>
          </div>
          <div>
            <div className="icon">
              <FaWallet />
            </div>
            <h5>INSURANCE OF DEPOSITS</h5>
            <p>
              To ensure stability of pay-outs on deposits, we have created the
              insurance fund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
