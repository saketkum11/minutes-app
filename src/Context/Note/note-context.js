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
import dayjs from "dayjs";

const noteContext = createContext();
const useNote = () => useContext(noteContext);

const NoteProvider = ({ children }) => {
  const Date = () => dayjs().format("YYYY-MM-DD");
  const { tokenStorage } = useAuth();
  const [userNotes, setUserNotes] = useState([]);
  const [noteFooter, setNoteFooter] = useState({
    colorPalette: false,
    label: false,
    priority: false,
  });
  const colors = [
    "bg-pink-9",
    "bg-purple-9",
    "bg-green-9",
    "bg-blue-9",
    "bg-pink-5",
    "bg-red-5",
  ];

  const notePriority = ["high", "medium", "low"];

  const initialNotes = {
    _id: uuid(),
    tags: [],
    noteTitle: "",
    noteText: "",
    color: "",
    priority: "",
    createdAt: Date(),
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
  const deleteNotes = async (note) => {
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

  const updatedNote = async (note) => {
    try {
      const response = await axios.post(
        `/api/notes/${note._id}`,
        { note },
        {
          headers: {
            authorization: tokenStorage,
          },
        }
      );
      setUserNotes(response.data.notes);
      console.log("response from updated value", response.data.notes);
    } catch (error) {
      console.error(error);
    }
  };

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
        colors,
        notePriority,
        updatedNote,
        setUserNotes,
      }}
    >
      {children}
    </noteContext.Provider>
  );
};

export { useNote, NoteProvider };
