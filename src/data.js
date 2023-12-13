///////////////////
//////Register/////
///////////////////

export const registerUser = async (user) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  const register = res.json();

  return register;
};

///////////////////
///////Login///////
///////////////////

export const loginUser = async (user) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const login = await res.json();
  return login;
};

/////////////////////////////
///////Change Password///////
/////////////////////////////

export const changePassword = async (user, token) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/update-user",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(user),
    }
  );
  const login = await res.json();
  return login;
};

/////////////////////////////
///////Forgot Password///////
/////////////////////////////

export const forgotPassword = async (user) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/forgot-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const forgot = await res.json();
  return forgot;
};

////////////////////////////
///////Reset Password///////
////////////////////////////

export const resetPassword = async (user, id) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/reset-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userid: id,
      },
      body: JSON.stringify(user),
    }
  );
  const reset = await res.json();
  return reset;
};

///////////////////////////////
///////edit user profile///////
///////////////////////////////

export const updateUser = async (user, token) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/update-user",
    {
      method: "PATCH",
      headers: {
        "auth-token": token,
      },
      body: user,
    }
  );
  const update = await res.json();
  return update;
};

////////////////////////////
///////Get single user///////
////////////////////////////

export const getUser = async (token) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/user",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    }
  );
  const user = await res.json();
  return user;
};

//////////////////////////////////////////
/////////get user transaction/////////////
//////////////////////////////////////////

export const getTransaction = async (token) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/transaction",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    }
  );
  const transaction = await res.json();
  return transaction;
};

//////////////////////////////////////////
/////////get user investmnets/////////////
//////////////////////////////////////////

export const getInvestment = async (token) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/investment",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    }
  );
  const investmnets = await res.json();
  return investmnets;
};

//////////////////////////////////////////
/////////get user withdrawal/////////////
//////////////////////////////////////////

export const getWithdrawal = async (token) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/withdrawal",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    }
  );
  const withdrawal = await res.json();
  return withdrawal;
};

//////////////////////////////////////////
/////////get user deposit/////////////
//////////////////////////////////////////

export const getDeposit = async (token) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/deposit",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    }
  );
  const deposit = await res.json();
  return deposit;
};

//////////////////////////////////////////
/////////make user investment/////////////
//////////////////////////////////////////

export const makeInvestment = async (token, invest) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/invest",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(invest),
    }
  );
  const makeinvest = await res.json();
  return makeinvest;
};

//////////////////////////////////////////
/////////make user withdrawal/////////////
//////////////////////////////////////////
export const makeWithdrawal = async (token, withdraw) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/withdraw",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(withdraw),
    }
  );
  const makewithdraw = await res.json();
  return makewithdraw;
};

//////////////////////////////////////////
/////////make user deoosit////////////////
//////////////////////////////////////////
export const makeDeposit = async (token, deposit) => {
  const res = await fetch(
    "https://expressworldtrade.onrender.com/api/users/deposit",
    {
      method: "POST",
      headers: {
        "auth-token": token,
      },
      body: deposit,
    }
  );
  const makedep = await res.json();
  return makedep;
};
