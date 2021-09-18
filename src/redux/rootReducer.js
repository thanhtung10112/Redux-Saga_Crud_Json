import { combineReducers } from "redux";

import usesReducer from "./reducer";

const rootReducer = combineReducers({
  data: usesReducer,
});

export default rootReducer;
