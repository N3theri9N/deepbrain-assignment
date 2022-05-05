import * as t from "../types"

export const signInUser = (user) => {
    return {
        type : t.SIGNIN_REQUESTED,
        payload : user,
    }
}

export const loginUser = (user) => {
    return {
        type : t.LOGIN_REQUESTED,
        payload : user,
    }
}

export const logoutUser = () => {
    return {
        type : t.LOGOUT_REQUESTED
    }
}