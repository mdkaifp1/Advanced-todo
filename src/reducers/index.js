import todoReducer from "./todoreducer";
import listReducer from "./listreducer";
import editReducer from "./edit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer,
  listReducer,
  editReducer
});

export default rootReducer;
