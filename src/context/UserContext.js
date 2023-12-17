import React, { useEffect } from "react";

export const UserContext = React.createContext();

const UserComponent = ({ children }) => {
  const [UserState, setUserState] = React.useState({});

  useEffect(() => {
    let user = sessionStorage.getItem("user");
    user = JSON.parse(user);
    // console.log(user);
    if (user) return setUserState(user);
  }, []);

  return (
    <UserContext.Provider value={[UserState, setUserState]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserComponent;
