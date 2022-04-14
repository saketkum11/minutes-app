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
import { v4 as uuid } from "uuid";

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
    _id: uuid(),
    tags: [],
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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const createNotes = async (note) => {
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
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
  const deleteNotes = async (note, id) => {
    try {
      const response = await axios.delete(`/api/notes/${note._id}`, {
        headers: {
          authorization: tokenStorage,
        },
      });
      setUserNotes(response.data.notes);
      console.log("response from create notes", response.data.notes);
    } catch (error) {
      console.error(error);
    }
  };
  const moveToTrash = () => {};

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
        userNotes,
        deleteNotes,
      }}
    >
      {children}
    </noteContext.Provider>
  );
};

export { useNote, NoteProvider };
