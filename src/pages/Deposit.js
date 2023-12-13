import React from "react";
import Background from "../components/Background";
import "../css/General2.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import cryp1 from "../assets/cryimg1.jpg";
import cryp2 from "../assets/cryimg2.jpg";
import cryp3 from "../assets/cryimg3.jpg";
import cryp4 from "../assets/cryimg4.jpg";
import cryp5 from "../assets/cryimg5.jpg";
// import Modalbtcdeposit from '../components/Modalbtcdeposit'
// import Modaltetherdeposit from '../components/Modaltetherdeposit'
// import Modaletheriumdeposit from '../components/Modaletheriumdeposit'
// import Modallunodeposit from '../components/Modallunodeposit'

const Deposit = () => {
  return (
    <>
      <Helmet>
        <title>ET-Options | Withdraw Funds</title>
      </Helmet>
      <Nav />
      <div className="general-container2">
        <Background text="DEPOSIT FUNDS" />
        <div className="body investment withdraw">
          <div className="plan-box">
            <h3>BITCOIN</h3>
            <div>
              <img src={cryp1} alt="" style={{ margin: "10px" }} width="90%" />
              <p className="last">
                <Link to="/deposit/Bitcoin">ADD FUND</Link>
              </p>
            </div>
          </div>
          <div className="plan-box">
            <h3>TETHER</h3>
            <div>
              <img src={cryp2} alt="" style={{ margin: "10px" }} width="90%" />
              <p className="last">
                <Link to="/deposit/Tether">ADD FUND</Link>
              </p>
            </div>
          </div>
          <div className="plan-box">
            <h3>ETHERIUM</h3>
            <div>
              <img src={cryp3} alt="" style={{ margin: "10px" }} width="90%" />
              <p className="last" style={{ marginTop: "18%" }}>
                <Link to="/deposit/Etherium">ADD FUND</Link>
              </p>
            </div>
          </div>
          <div className="plan-box">
            <h3>LUNO</h3>
            <div>
              <img src={cryp4} alt="" style={{ margin: "10px" }} width="90%" />
              <p className="last">
                <Link to="/deposit/Luno">ADD FUND</Link>
              </p>
            </div>
          </div>
          <div className="plan-box">
            <h3>VALR</h3>
            <div>
              <img src={cryp5} alt="" style={{ margin: "10px" }} width="90%" />
              <p className="last">
                <Link to="/deposit/Valr">ADD FUND</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
