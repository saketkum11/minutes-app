import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { useAuth } from "../Auth/Auth-Context";
import axios from "axios";
import noteReducer from "../../Reducer/noteReducer";
const noteContext = createContext();
const useNote = () => useContext(noteContext);

const NoteProvider = ({ children }) => {
  const { tokenStorage } = useAuth();
  const [userNotes, setUserNotes] = useState([]);
  const [noteFooter, setNoteFooter] = useState({
    colorPalette: false,
    label: false,
  });

  const initialNotes = {
    label: [],
    noteTitle: "",
    noteText: "",
    color: "",
  };
  const [noteState, noteDispatch] = useReducer(noteReducer, initialNotes);
  const getNotes = async () => {
    try {
      const response = await axios.get("/api/notes", {
        headers: {
          authorization: tokenStorage,
        },
      });
      setUserNotes(response.data.notes);
      console.log("response from notes context", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const createNotes = async ({ notes }) => {
    try {
      const response = await axios.post(
        "/api/notes",
        { notes },
        {
          headers: {
            authorization: tokenStorage,
          },
        }
      );
      setUserNotes(response.data.notes);
      console.log("response from create notes", response.data.notes);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("userstate", userNotes);

  return (
    <noteContext.Provider
      value={{
        getNotes,
        createNotes,
        noteFooter,
        setNoteFooter,
        noteDispatch,
        noteState,
      }}
    >
      {children}
    </noteContext.Provider>
  );
};

export { useNote, NoteProvider };
