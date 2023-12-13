import React from "react";
import Background from "../components/Background";
import "../css/General2.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import cryp from "../assets/bank.png";
import cryp1 from "../assets/cryimg1.jpg";
import cryp2 from "../assets/westernunion.png";
import cryp3 from "../assets/etherium.png";
import cryp4 from "../assets/moneygram.png";
// import Modalbankwithdraw from '../components/Modalbankwithdraw'
// import Modalbtcwithdraw from '../components/Modalbtcwithdraw'
// import Modallunowithdraw from '../components/Modallunowithdraw'
// import Modaltetherdeposit from '../components/Modaltetherdeposit'

const Withdraw = () => {
  return (
    <>
      <Helmet>
        <title>ET-Options | Withdraw Funds</title>
      </Helmet>
      <Nav />
      <div className="general-container2">
        <Background text="WITHDRAW FUNDS" />
        <div className="body investment withdraw">
          <div className="plan-box">
            <h3>BANK TRANSFER</h3>
            <div>
              <img src={cryp} alt="" width="100px" style={{ margin: "20px" }} />
              <p>Minimum - 3000.00 USD</p>
              <p>Maximum - 10000000.00 USD</p>
              <p>Charge - 0 + 0% USD</p>
              <p>Processing Time - 1 Day</p>
              <p className="last">
                <Link to="/withdraw/Bank Transfer">Withdraw Now</Link>
              </p>
            </div>
          </div>
          <div className="plan-box">
            <h3>BITCOIN(BTC)</h3>
            <div>
              <img
                src={cryp1}
                alt=""
                width="100px"
                style={{ margin: "20px" }}
              />
              <p>Minimum - 5000.00 USD</p>
              <p>Maximum - 10000000.00 USD</p>
              <p>Charge - 0 + 0% USD</p>
              <p>Processing Time - 1 Day</p>
              <p className="last">
                <Link to="/withdraw/Bitcoin">Withdraw Now</Link>
              </p>
            </div>
          </div>
          <div className="plan-box">
            <h3>ETHERIUM</h3>
            <div>
              <img
                src={cryp3}
                alt=""
                width="100px"
                style={{ margin: "20px" }}
              />
              <p>Minimum - 5000.00 USD</p>
              <p>Maximum - 10000000.00 USD</p>
              <p>Charge - 0 + 0% USD</p>
              <p>Processing Time - 1 Day</p>
              <p className="last">
                <Link to="/withdraw/Etherium">Withdraw Now</Link>
              </p>
            </div>
          </div>
          <div className="plan-box">
            <h3>WESTERN UNION</h3>
            <div>
              <img
                src={cryp2}
                alt=""
                width="100px"
                style={{ margin: "20px" }}
              />
              <p>Minimum - 10000.00 USD</p>
              <p>Maximum - 10000000.00 USD</p>
              <p>Charge - 0 + 0% USD</p>
              <p>Processing Time - 1 Day</p>
              <p className="last">
                <Link to="/withdraw/Western Union">Withdraw Now</Link>
              </p>
            </div>
          </div>
          <div className="plan-box">
            <h3>MONEY GRAM</h3>
            <div>
              <img
                src={cryp4}
                alt=""
                width="100px"
                style={{ margin: "20px" }}
              />
              <p>Minimum - 10000.00 USD</p>
              <p>Maximum - 10000000.00 USD</p>
              <p>Charge - 0 + 0% USD</p>
              <p>Processing Time - 1 Day</p>
              <p className="last">
                <Link to="/withdraw/Money Gram">Withdraw Now</Link>
              </p>
            </div>
          </div>
          {/* <div className="plan-box">
            <h3>LUNO</h3>
            <div>
              <img
                src={cryp4}
                alt=""
                width="100px"
                style={{ margin: "20px" }}
              />
              <p>Minimum - 2500.00 USD</p>
              <p>Maximum - 10000000.00 USD</p>
              <p>Charge - 0 + 0% USD</p>
              <p>Processing Time - 1 Day</p>
              <p className="last">
                <Link to="/withdraw/Luno">Withdraw Now</Link>
              </p>
            </div>
          </div>
          <div className="plan-box">
            <h3>TETHER(USDT)</h3>
            <div>
              <img
                src={cryp2}
                alt=""
                width="100px"
                style={{ margin: "20px" }}
              />
              <p>Minimum - 1000.00 USD</p>
              <p>Maximum - 10000000.00 USD</p>
              <p>Charge - 0 + 0% USD</p>
              <p>Processing Time - 1 Day</p>
              <p className="last">
                <Link to="/withdraw/Tether">Withdraw Now</Link>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Withdraw;
