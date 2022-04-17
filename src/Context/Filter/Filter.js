import React, { createContext, useContext, useReducer } from "react";

const filterContext = createContext();
const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
  const initialFilter = {
    tags: [],
    priority: [],
    sortBy: [],
  };
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );

  return (
    <filterContext.Provider value={{ filterDispatch, initialFilter }}>
      {children}
    </filterContext.Provider>
  );
};

export { useFilter, FilterProvider };
