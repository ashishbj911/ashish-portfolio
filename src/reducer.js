import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  PORTFOLIO_ITEMS,
  FILTER_CATEGORY,
  FILTER_ITEMS,
  PORTFOLIO_CATEGORIES,
} from "./actions";
import {data} from "./utils/data"
export const reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === FILTER_ITEMS) {
      let newItems = [...data]
      if(action.payload !== "all"){
        newItems = newItems.filter((item) => item.category === action.payload);
      }
      return { ...state, items: newItems};
  }
};
