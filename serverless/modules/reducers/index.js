import { combineReducers } from "redux";
import employeeReducer from "./employee";
import saccontentReducer from "./saccontent";
import userReducer from "./user";

const rootReducer = combineReducers({
    employee: employeeReducer,
    saccontent: saccontentReducer,
    user : userReducer,
});

export default rootReducer;