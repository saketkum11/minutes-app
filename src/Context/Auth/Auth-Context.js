import React, { useContext, createContext, useState } from "react";
import axios from "axios";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //////

  const loginTextHandler = () => {
    setIsLoggedIn((login) => !login);
  };

  const signupHandler = async ({ firstName, lastName, email, password }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const loginHandler = async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      console.log("Login", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <authContext.Provider
      value={{ signupHandler, loginHandler, loginTextHandler, isLoggedIn }}
    >
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
