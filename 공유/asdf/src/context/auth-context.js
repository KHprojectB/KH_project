import React, {useState} from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  admin: false,
  isAdmin: () => {},
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {

  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(false);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
      setToken(token);
  }
  const logoutHandler = () => {
    setToken(null);
    setAdmin(false);
  }

  const adminHandler = (a) => {
    if (a === "messi") {
      setAdmin(true)
    }
  }

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    admin: admin,
    isAdmin: adminHandler,
    login: loginHandler,
    logout: logoutHandler
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;

