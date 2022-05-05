import { HYDRATE } from "next-redux-wrapper";
import * as t from "../types";

const initialState = {
    loginUser : '',
    loginError : null,
    isLoggined: false,
    token : ''
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case t.LOGIN_SUCCESS :
            return {
                loginUser : action.payload.id,
                loginError : null,
                isLoggined : true,
                token : ''
            }
        case t.LOGOUT_SUCCESS :
            return {
                loginUser : '',
                loginError : null,
                isLoggined: false,
                token : ''
            };
        case t.SIGNIN_SUCCESS : {
            return {
                ...state
            }
        }
        default:
            return state;
    }
};

export default mainReducer;