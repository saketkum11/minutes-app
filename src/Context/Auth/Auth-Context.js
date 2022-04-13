import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const tokenStorage = localStorage.getItem("token");

  const isAuth = tokenStorage ? true : false;
  const navigate = useNavigate();

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
      navigate("/notes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <authContext.Provider
      value={{
        signupHandler,
        loginHandler,
        loginTextHandler,
        isLoggedIn,
        tokenStorage,
        isAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
