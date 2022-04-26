import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState({
    tokenData: localStorage.getItem("token"),
    isAuth: localStorage.getItem("token") ? true : false,
  });

  const { tokenData, isAuth } = isLoggedIn;

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
      console.log("response from signup", response);
    } catch (error) {
      console.error(error);
    }
  };
  const loginHandler = async ({ email, password }) => {
    if (isAuth) {
      try {
        const response = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });
        localStorage.setItem("token", response.data.encodedToken);
        console.log("response from login", response);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("signup");
    }
  };

  return (
    <authContext.Provider
      value={{
        signupHandler,
        loginHandler,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
