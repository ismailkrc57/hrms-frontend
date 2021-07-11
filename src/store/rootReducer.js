import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const rootRedcuer = combineReducers({
    userReducer
})

export default rootRedcuer;