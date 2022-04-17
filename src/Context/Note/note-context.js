import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { useAuth } from "../Auth-Context/Auth-Context";
import axios from "axios";
import noteReducer from "../../Reducer/noteReducer";
import { v4 as uuid } from "uuid";

const noteContext = createContext();
const useNote = () => useContext(noteContext);

const NoteProvider = ({ children }) => {
  const moment = require("moment");
  const date = moment().startOf("hour").fromNow();
  const { tokenStorage } = useAuth();
  const [userNotes, setUserNotes] = useState([]);
  const [newFlag, setNewFlag] = useState({
    newColor: false,
    newTag: false,
    newPriority: false,
    modal: false,
  });
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],

      ["clean"],
    ],
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];
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
    createdAt: date,
  };
  const [noteState, noteDispatch] = useReducer(noteReducer, initialNotes);

  useEffect(() => {
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
  console.log("userstate", userNotes);
  console.log("notestate", noteState);
  return (
    <noteContext.Provider
      value={{
        initialNotes,
        createNotes,
        noteDispatch,
        noteState,
        userNotes,
        deleteNotes,
        colors,
        notePriority,
        updatedNote,
        setUserNotes,
        modules,
        colors,
        newFlag,
        setNewFlag,
      }}
    >
      {children}
    </noteContext.Provider>
  );
};

export { useNote, NoteProvider };
