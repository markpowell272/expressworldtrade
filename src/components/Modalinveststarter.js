import React, { useEffect, useState } from "react";
import "../css/Modal.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { makeInvestment, getUser } from "../data";

const Modalinveststarter = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [UserState, setUserState] = React.useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();

  const [planDetails, setPlanDetails] = React.useState({
    plan: params.plan ? params.plan : "Mini Plan",
    amount: null,
  });

  const handleSubmit = async () => {
    setLoading(true);

    if (planDetails.amount === null) {
      setToastifyState({
        ...ToastifyState,
        message: "Please fill all fields",
        variant: "error",
        open: true,
      });
      setLoading(false);
      return;
    }

    let Investment = await makeInvestment(UserState.token, planDetails);

    if (Investment.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: Investment.message,
        variant: "error",
        open: true,
      });
    }

    setToastifyState({
      ...ToastifyState,
      message: "Investment Successful, an email has been sent to you.",
      variant: "success",
      open: true,
    });

    setLoading(false);
    setPlanDetails({ ...planDetails, amount: null });
    navigate("/", { state: "reload" });
  };

  useEffect(() => {
    if (params.plan) {
      setPlanDetails({ ...planDetails, plan: params.plan });
    }
  }, [params]);

  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);
      try {
        const user = await getUser(UserState.token);
        console.log(user);
        setBalance(user.balance);
        setInvest(user.investments.length);
        setWithdraw(user.withdrawal.length);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchBalance();
  }, [balance]);

  return (
    <div className="modal-container mb-5">
      <Link to="/investment-package" className="nav-icon">
        <BsFillArrowLeftCircleFill />
      </Link>
      <div className="modal-box deposit">
        <h2>Investment On {planDetails.plan}</h2>
        <div>
          <h3>Your Balance</h3>
          <p style={{ color: "green" }}>${balance}</p>
        </div>
        <form>
          <h3>Investment Range</h3>
          <p>
            {planDetails.plan.toLowerCase().includes("mini") && (
              <>300 USD - 2999 USD</>
            )}
            {planDetails.plan.toLowerCase().includes("silver") && (
              <>3000 USD - 49999 USD</>
            )}
            {planDetails.plan.toLowerCase().includes("gold") && (
              <>50000 USD - 99999 USD</>
            )}
            {planDetails.plan.toLowerCase().includes("platinum") && (
              <>100000 USD - 600000 USD</>
            )}
          </p>
          <div>
            <h3>Amount To Invest</h3>
            <input
              type="number"
              placeholder="Amount To Invest"
              value={planDetails.amount}
              onChange={(e) =>
                setPlanDetails({ ...planDetails, amount: e.target.value })
              }
              required
            />{" "}
            <br /> <br />
            <select
              onChange={(e) => {
                navigate(`/investment/${e.target.value}`);
              }}
              value={params.plan ? params.plan : "Mini Plan"}
            >
              <option value={"Mini Plan"}>Mini Plan</option>
              <option value={"Silver Plan"}>Silver Plan</option>
              <option value={"Gold Plan"}>Gold Plan</option>
              <option value={"Platinum Plan"}>Platinum Plan</option>
            </select>
          </div>
          <br />
          <div
            style={{
              border: "1px solid rgba(0,0,0,0.3)",
              borderRadius: "5px",
              width: "90%",
              margin: "auto",
              padding: "0",
            }}
          >
            <h5
              style={{
                background: "var(--secondary)",
                color: "var(--primary)",
                margin: "0px",
                padding: "10px",
              }}
            >
              Your Investment Details
            </h5>
            <p
              style={{
                padding: "5px",
                borderBottom: "1px solid rgba(0,0,0,0.3)",
                margin: "0px",
              }}
            >
              <GiCheckMark />
              &nbsp;Comission -{" "}
              {planDetails.plan.toLowerCase().includes("mini") && <>25%</>}
              {planDetails.plan.toLowerCase().includes("silver") && <>35%</>}
              {planDetails.plan.toLowerCase().includes("gold") && <>45%</>}
              {planDetails.plan.toLowerCase().includes("platinum") && <>55%</>}
            </p>
            <p
              style={{
                padding: "5px",
                borderBottom: "1px solid rgba(0,0,0,0.3)",
                margin: "0px",
              }}
            >
              <GiCheckMark />
              &nbsp;Compound Weekly - 200
            </p>
            <p
              style={{
                padding: "5px",
                margin: "0px",
              }}
            >
              <GiCheckMark />
              &nbsp;Term Monthly - 300
            </p>
          </div>
          <br />
          <button onClick={handleSubmit} disabled={loading}>
            <FaTelegramPlane /> {loading ? "LOADING..." : "INVEST"}
          </button>
        </form>
        <br />
        {/* <Link to="/investment-package" style={{ marginTop: "0px" }}>
          Go back
        </Link> */}
      </div>
    </div>
  );
};

export default Modalinveststarter;
