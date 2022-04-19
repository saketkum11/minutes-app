import React, { createContext, useContext, useReducer, useState } from "react";
import filterReducer from "../../Reducer/FilterReducer";
import { useNote } from "../Note/note-context";

const filterContext = createContext();
const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
  const { userNotes } = useNote();
  const [filterFlag, setFilterFlag] = useState(false);

  const initialFilter = {
    high: false,
    low: false,
    medium: false,
    sortBy: null,
  };
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );
  const filterData = (noteData, filterData) => {
    let getHigh = [];
    let getMedium = [];
    let getLow = [];
    if (
      filterData.high === false &&
      filterData.medium === false &&
      filterData.low === false
    ) {
      return noteData;
    }
    if (filterData.high === true) {
      getHigh = noteData.filter((data) => data.priority === "high");
    }
    if (filterData.medium === true) {
      getMedium = noteData.filter((data) => data.priority === "medium");
    }
    if (filterData.low === true) {
      getLow = noteData.filter((data) => data.priority === "low");
    }
    return [...getHigh, ...getMedium, ...getLow];
  };

  const sortData = (filterData, filterState) => {
    if (filterState.sortBY === "older") {
      return filterData.sort((a, b) => a.createdAt - b.createdAt);
    }
    if (filterState.sortBY === "latest") {
      return filterData.sort((a, b) => b.createdAt - a.createdAt);
    }
    return;
  };

  const filteredData = filterData(userNotes, filterState);
  const sortedData = sortData(filteredData, filterState);

  console.log("filterState", filterState);
  console.log("userNotes", userNotes);
  console.log("filteredData", filteredData);
  console.log("sortedData", sortedData);
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
