import React, { createContext } from "react";
import { useAuth } from "../Auth/Auth-Context";
const noteContext = createContext();
const useNote = () => useContext(noteContext);

const NoteProvider = ({ children }) => {
  const {} = useAuth();

  return (
    <noteContext.Provider value={{ set: 0 }}>{children}</noteContext.Provider>
  );
};

export { useNote, NoteProvider };
