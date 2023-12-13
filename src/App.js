import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
  // useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
// import Payment from "./components/Payment";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
// import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import Passwordreset from "./pages/Passwordreset";
import Dashboard from "./pages/Dashboard";
import InvestmentPackage from "./pages/InvestmentPackage";
import Modalinveststarter from "./components/Modalinveststarter";
// import Modalinvestsilver from "./components/Modalinvestsilver";
// import Modalinvestgold from "./components/Modalinvestgold";
import InvestmentHistory from "./pages/InvestmentHistory";
import Deposit from "./pages/Deposit";
import DepositHistory from "./pages/DepositHistory";
import Withdraw from "./pages/Withdraw";
import WithdrawHistory from "./pages/WithdrawHistory";
import Transaction from "./pages/Transaction";
import Editprofile from "./pages/Editprofile";
import Passwordchange from "./pages/Passwordchange";
import Support from "./pages/Support";
import SupportTicket from "./pages/SupportTicket";

import Modalbtcdeposit from "./components/Modalbtcdeposit";
// import Modaltetherdeposit from "./components/Modaltetherdeposit";
// import Modaletheriumdeposit from "./components/Modaletheriumdeposit";
// import Modallunodeposit from "./components/Modallunodeposit";

import Modalbankwithdraw from "./components/Modalbankwithdraw";
// import Modalbtcwithdraw from "./components/Modalbtcwithdraw";
// import Modallunowithdraw from "./components/Modallunowithdraw";
// import Modaltetherwithdraw from "./components/Modaltetherwithdraw";

import ToastifyComponent from "./context/ToastifyContext";
import UserComponent from "./context/UserContext";
import Toastify from "./components/Toastify";
import Passwordresetconfirm from "./pages/Passwordresetconfirm";
import TransactionComponent from "./context/transactionContext";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const [show, setShow] = useState(-100);
  const goUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 500) {
        setShow(10);
      } else {
        setShow(-100);
      }
    });
  }, []);

  // const [modal, setModal] = useState(false);

  // const openModal = () => {
  //   setModal(!modal);
  // };

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <UserComponent>
      <TransactionComponent>
        <ToastifyComponent className="App">
          <Toastify />
          <Router>
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              {/* <Route exact path="/faqs" element={<Faq />} /> */}
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/login" element={<Signin />} />
              <Route exact path="/register" element={<Signup />} />
              <Route exact path="/register/:ref" element={<Signup />} />
              <Route
                exact
                path="/reset-password/:id"
                element={<Passwordresetconfirm />}
              />
              <Route
                exact
                path="/forgot-password"
                element={<Passwordreset />}
              />
              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route
                  exact
                  path="/investment-package"
                  element={<InvestmentPackage />}
                />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route
                  exact
                  path="/investment"
                  element={<Modalinveststarter />}
                />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route
                  exact
                  path="/investment/:plan"
                  element={<Modalinveststarter />}
                />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route
                  exact
                  path="/investment-history"
                  element={<InvestmentHistory />}
                />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route exact path="/deposit" element={<Deposit />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route
                  exact
                  path="/deposit-history"
                  element={<DepositHistory />}
                />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route exact path="/withdraw" element={<Withdraw />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route
                  exact
                  path="/withdraw-history"
                  element={<WithdrawHistory />}
                />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route exact path="/transaction" element={<Transaction />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route exact path="/edit-profile" element={<Editprofile />} />
              </Route>
              <Route
                exact
                path="/change-password"
                element={<Passwordchange />}
              />
              <Route exact path="/support" element={<Support />} />
              <Route exact path="/support-open" element={<SupportTicket />} />
              <Route
                exact
                path="/deposit/:method"
                element={<Modalbtcdeposit />}
              />
              {/* <Route
              exact
              path="/tether-deposit"
              element={<Modaltetherdeposit />}
            />
            <Route
              exact
              path="/etherium-deposit"
              element={<Modaletheriumdeposit />}
            />
            <Route exact path="/luno-deposit" element={<Modallunodeposit />} /> */}
              <Route element={<ProtectedRoutes />}>
                <Route
                  exact
                  path="/withdraw/:method"
                  element={<Modalbankwithdraw />}
                />
              </Route>
              {/* <Route exact path="/btc-withdraw" element={<Modalbtcwithdraw />} />
            <Route
              exact
              path="/luno-withdraw"
              element={<Modallunowithdraw />}
            />
            <Route
              exact
              path="/tether-withdraw"
              element={<Modaltetherwithdraw />}
            /> */}
              <Route exact path="*" element={<Notfound />} />
            </Routes>
            {/* <Payment /> */}
            <Footer />

            <Box
              sx={{
                "& > :not(style)": {
                  m: 1,
                  position: "fixed",
                  bottom: show,
                  right: 25,
                  transition: "all 1s",
                },
              }}
            >
              <Fab
                size="medium"
                color="#2351DC;"
                aria-label="top"
                onClick={goUp}
              >
                <KeyboardArrowUpRoundedIcon sx={{ fontSize: 30 }} />
              </Fab>
            </Box>
          </Router>
        </ToastifyComponent>
      </TransactionComponent>
    </UserComponent>
  );
}

export default App;
