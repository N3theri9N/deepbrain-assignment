import { combineReducers } from "redux";
import employeeReducer from "./employee";
import saccontentReducer from "./saccontent";

const rootReducer = combineReducers({
    employee: employeeReducer,
    saccontent: saccontentReducer,
});

export default rootReducer;