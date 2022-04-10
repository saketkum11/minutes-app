import React, { useContext, createContext, useState } from "react";
import axios from "axios";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const signupHandler = async (data) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      setUsers(response.data.encodedToken);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <authContext.Provider value={{ signupHandler }}>
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
