import React, { createContext, useEffect, useContext } from "react";
import { useAuth } from "../Auth/Auth-Context";
import axios from "axios";
const noteContext = createContext();
const useNote = () => useContext(noteContext);

const NoteProvider = ({ children }) => {
  const { tokenStorages } = useAuth();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get("/api/notes", {
          headers: {
            authorization: tokenStorages,
          },
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    getNotes();
  }, []);

  return (
    <noteContext.Provider value={{ set: 0 }}>{children}</noteContext.Provider>
  );
};

export { useNote, NoteProvider };
