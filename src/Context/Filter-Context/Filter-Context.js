import React, { createContext, useContext, useReducer, useState } from "react";
import filterReducer from "../../Reducer/FilterReducer";
import { useNote } from "../Note/note-context";

const filterContext = createContext();
const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
  const { userNotes } = useNote();
  const [filterFlag, setFilterFlag] = useState(false);
  {
    /* const sortNote = (noteData) => {
    if (noteData === "older") {
      return noteData.sort((a, b) => a.createdAT - b.createdAt);
    }
    if (noteData === "latest") {
      return noteData.sort((a, b) => b.createdAT - a.createdAT);
    }
    return noteData;
  };*/
  }
  const filterData = (sortedData) => {
    if (sortedData.priority === "low") {
      return sortedData.filter((priority) => priority.priority === "low");
    }
    if (sortedData.priority === "medium") {
      return sortedData.filter((priority) => priority.priority === "medium");
    }
    if (sortedData.priority === "high") {
      return sortedData.filter((priority) => priority.priority === "high");
    }
    return sortedData;
  };

  const filteredData = filterData(userNotes);
  console.log("filteredData", filteredData);
  const initialFilter = {
    tags: [],
    priority: [],
    sortBy: [],
  };
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );
  console.log("filterState", filterState);
  console.log("userNotes", userNotes);
  return (
    <filterContext.Provider
      value={{
        filterDispatch,
        initialFilter,
        filterState,
        setFilterFlag,
        filterFlag,
        filteredData,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export { useFilter, FilterProvider };
