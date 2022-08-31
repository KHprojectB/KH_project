import React, {useState} from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  admin: false,
  isAdmin: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {

  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  }
  const logoutHandler = () => {
    setToken(null);
  }

  const adminHandler = () => {
    setIsAdmin(true);
  }

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    isAdmin: isAdmin,
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

