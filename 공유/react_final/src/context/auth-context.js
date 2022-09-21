import React, {useState, useEffect} from "react";

const getLocalStorage = () => {
  let token = localStorage.getItem('token');

  if (token) {
    return JSON.parse(localStorage.getItem('token'))
  } 
  else {
    return null;
  }
}

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  admin: false,
  isAdmin: () => {},
  login: (token) => {},
  logout: () => {},
  id: (id) => {},
  mbId: ""
});

export const AuthContextProvider = (props) => {

  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [id, setId] = useState("");

  const userIsLoggedIn = getLocalStorage();

  const loginHandler = (token) => {
      setToken(token);
      localStorage.setItem('token', JSON.stringify(token))
  }
  const logoutHandler = () => {
    localStorage.setItem('token', null)
    setToken(null);
    setAdmin(false);
  }

  const adminHandler = (a) => {
    if (a === "messi") {
      setAdmin(true)
    }
  }

  const idHandler = (id) => {
    setId(id)
  }

  const contextValue = {
    token: getLocalStorage(),
    isLoggedIn: userIsLoggedIn,
    admin: admin,
    isAdmin: adminHandler,
    login: loginHandler,
    logout: logoutHandler,
    id: idHandler,
    mbId: id
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;

