import React, { useContext, useReducer} from "react";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  FILTER_ITEMS,
  LOAD_ITEMS,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS
} from "./actions";
import { reducer } from "./reducer";
import { data } from "./utils/data";

const AppContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  categories: ['all', ...new Set(data.map(item => item.category))],
  items:data
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const filterItems = (category) => {
    dispatch({ type: FILTER_ITEMS,payload: category});
  }


  return (
    <AppContext.Provider
      value={{ ...state, openSidebar, closeSidebar, filterItems}}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
