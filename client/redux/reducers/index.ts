import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import sac from './sacReducer.ts';

const rootReducer = ( state: any, action: any) => {
    if(action.type === HYDRATE){
        return {
            ...state,
            ...action.payload
        };
    }
    return combineReducers({
        sac,
    })(state, action);
}
export default rootReducer;

