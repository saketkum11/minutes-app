import React, { createContext, useContext, useReducer, useState } from "react";
import filterReducer from "../../Reducer/FilterReducer";

const filterContext = createContext();
const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
  const [filterFlag, setFilterFlag] = useState(false);
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
    <filterContext.Provider
      value={{
        filterDispatch,
        initialFilter,
        filterState,
        setFilterFlag,
        filterFlag,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export { useFilter, FilterProvider };
