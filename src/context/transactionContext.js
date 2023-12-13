import React, { useEffect } from "react";
import {
  getTransaction,
  getWithdrawal,
  getInvestment,
  getDeposit,
} from "../data";
import { UserContext } from "../context/UserContext";

export const transactionContext = React.createContext();

const TransactionComponent = ({ children }) => {
  const [transactionState, setTransactionState] = React.useState(null);
  const [withdrawalState, setWithdrawalState] = React.useState(null);
  const [depositState, setDepositState] = React.useState(null);
  const [investmentState, setInvestmentState] = React.useState(null);
  const [UserState, setUserState] = React.useContext(UserContext);

  const getTransactions = async () => {
    if (transactionState) return;

    let transaction = await getTransaction(UserState.token);

    if (transaction.error) {
      return console.log(transaction.message);
    }

    setTransactionState(transaction);
  };

  const getInvestments = async () => {
    if (investmentState) return;

    let investment = await getInvestment(UserState.token);

    if (investment.error) {
      return console.log(investment.message);
    }

    setInvestmentState(investment);
  };

  const getDeposits = async () => {
    if (depositState) return;

    let deposit = await getDeposit(UserState.token);

    if (deposit.error) {
      return console.log(deposit.message);
    }

    setDepositState(deposit);
  };

  const getWithdrawals = async () => {
    if (withdrawalState) return;

    let withdrawal = await getWithdrawal(UserState.token);

    if (withdrawal.error) {
      return console.log(withdrawal.message);
    }

    setWithdrawalState(withdrawal);
  };

  useEffect(() => {
    if (!UserState.token) return false;
    getDeposits();
    getWithdrawals();
    getInvestments();
    getTransactions();
  }, [UserState]);

  return (
    <transactionContext.Provider
      value={{
        transaction: [transactionState, setTransactionState],
        withdrawal: [withdrawalState, setWithdrawalState],
        deposit: [depositState, setDepositState],
        investment: [investmentState, setInvestmentState],
      }}
    >
      {children}
    </transactionContext.Provider>
  );
};

export default TransactionComponent;
