import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [response, setResponse] = useState([]);
  const signupHandler = async (data) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: "Adarsh",
        lastName: "Balika",
        email: "adarshbalika@neog.camp",
        password: "adarshBalika",
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      setResponse(response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ signupHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
