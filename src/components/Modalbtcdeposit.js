import React, { useEffect } from "react";
import "../css/Modal.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { makeDeposit, getUser } from "../data";

const Modalbtcdeposit = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = React.useState(false);
  const [UserState, setUserState] = React.useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();

  const [depositDetails, setDepositDetails] = React.useState({
    method: params.method ? params.method : "Bitcoin",
    amount: null,
    file: [],
  });

  const handleSubmit = async () => {
    setLoading(true);
    // console.log(depositDetails);

    if (depositDetails.amount === null || depositDetails.file.length === 0) {
      setToastifyState({
        ...ToastifyState,
        message: "Please fill all fields",
        variant: "error",
        open: true,
      });
      setLoading(false);
      return;
    }

    let formData = new FormData();

    formData.append("files", depositDetails.file[0]);
    formData.append("amount", depositDetails.amount);
    formData.append("mode", depositDetails.method);

    let Deposit = await makeDeposit(UserState.token, formData);

    console.log(Deposit);

    console.log(UserState);

    // console.log(depositDetails);

    if (Deposit.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: Deposit.message,
        variant: "error",
        open: true,
      });
    }

    setToastifyState({
      ...ToastifyState,
      message: "Deposit Successful, an email has been sent to you.",
      variant: "success",
      open: true,
    });

    setLoading(false);
    setDepositDetails({ ...depositDetails, amount: null });
    navigate("/dashboard", { state: "reload" });
  };

  useEffect(() => {
    if (params.method) {
      setDepositDetails({ ...depositDetails, method: params.method });
    }
  }, [params]);

  return (
    <div
      className="modal-container"
      style={{
        marginBottom: depositDetails.method === "Valr" ? "200px" : "5px",
      }}
    >
      <Link to="/deposit" className="nav-icon">
        <BsFillArrowLeftCircleFill />
      </Link>
      <div className="modal-box deposit">
        <h2>Deposit Using {depositDetails.method}</h2>
        <div>
          <h3>
            {depositDetails.method === "Valr"
              ? "Valr Details"
              : "Wallet Address"}
          </h3>
          <p>
            {depositDetails.method === "Bitcoin" && (
              <>39hBs64LeXRmaW3B87qkcHE3sfv3BZNgZW</>
            )}
            {depositDetails.method === "Tether" && (
              <>TLpBFeHjS2DD1TmV2PgBjUErGCfrXaELoj</>
            )}
            {depositDetails.method === "Etherium" && (
              <>TLpBFeHjS2DD1TmV2PgBjUErGCfrXaELoj</>
            )}
            {depositDetails.method === "Luno" && (
              <>3Nww1SGjVnrm4GFy2RHDxv3DZpNaYTrrbx</>
            )}
            {depositDetails.method === "Valr" && (
              <p>
                Recipient - VALR <br />
                Account number - 001624849 <br /> Account type - Current /
                Cheque <br />
                Bank - Standard Bank <br />
                Branch - 051001 <br />
                Reference number - VRYX9A63NZ
              </p>
            )}
          </p>
        </div>
        <form>
          <h3>Amount Deposited</h3>
          <div>
            <input
              type="number"
              placeholder="Amount Deposited"
              value={depositDetails.amount}
              required
              onChange={(e) =>
                setDepositDetails({
                  ...depositDetails,
                  amount: e.target.value,
                })
              }
            />
          </div>
          <br />
          <select
            onChange={(e) => {
              navigate(`/deposit/${e.target.value}`);
            }}
            value={params.method ? params.method : "Bitcoin"}
          >
            <option value={"Bitcoin"}>Bitcoin</option>
            <option value={"Tether"}>Tether</option>
            <option value={"Etherium"}>Etherium</option>
            <option value={"Luno"}>Luno</option>
            <option value={"Valr"}>Valr</option>
          </select>
          <br /> <br />
          <h3>Deposit Proof</h3>
          <div>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) =>
                setDepositDetails({
                  ...depositDetails,
                  file: e.target.files,
                })
              }
            />
          </div>
          <br />
          <button onClick={handleSubmit} disabled={loading}>
            <FaTelegramPlane /> {loading ? "LOADING..." : "DEPOSIT"}
          </button>
        </form>
        <br />
        <div>
          <h3>How To Deposit</h3>
          <p>
            You are required to make payment to the address provided above and
            fill the form as stated for your deposit to be processed and your
            dashboard will be updated within 24hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modalbtcdeposit;
