//This is the root reducer, it combines all other reducers into one for a single point of access

import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import peoplePageReducer from "./peoplePageReducer";

export default combineReducers({
  modal: modalReducer,
  page: peoplePageReducer,
});
