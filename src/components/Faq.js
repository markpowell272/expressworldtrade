import React from "react";
// import Background from "./Background";
import "../css/General.css";
// import Nav from "./Nav";
// import { Helmet } from "react-helmet";
import faq from "../assets/faq.gif";

const Faq = () => {
  return (
    <div className="general-container">
      <div className="body">
        <h3 className="text-center mb-5">Frequently Asked Questions</h3>
        <div className="d-lg-flex align-items-center">
          <div className="accordion" id="accordionExample" style={{ flex: 1 }}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ width: "100%" }}
                >
                  WHAT IS A STARTUP INVESTMENT?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  A 'startup investment' is an illiquid, long-term bet in an
                  early-stage company for which the goal is to help a company
                  launch and thus create a greater return than a traditional
                  public market investment.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  WHAT INFORMATION SHOULD I PROVIDE TO CREATE AN ACCOUNT?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We clearly understand the desire of our customers to keep
                  their anonymity on the Internet. We do not require any
                  verifications of your personality, proof of your physical
                  address, telephone number, etc. What is needed is the
                  information, due to which you will be identified and
                  recognized by our protection system. This information includes
                  the following: full name, username, email address, and payment
                  accounts. This information is used solely to simplify your
                  account administration.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  WHAT DO I NEED TO START INVESTING?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  In order to invest through expressworldtrade.option.com and
                  earn profit you must complete the registration process.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  HOW CAN I MAKE A DEPOSIT?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Choose the most suitable plan, click 'MAKE DEPOSIT', specify
                  the preferred e-wallet, enter the deposit amount and confirm
                  the transaction.
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src={faq} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
