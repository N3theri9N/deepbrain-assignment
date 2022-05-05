import * as t from "../types";
import {put} from "redux-saga/effects";

function* signInUser(action){
    try {
        const response = yield fetch("/api/user", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(action.payload)
        })

        const newUser = yield response.json();

        yield put({
            type: t.SIGNIN_SUCCESS,
            payload: newUser.data,
        });
    } catch (error) {
        yield put({
            type: t.SIGNIN_FAILURE,
            payload: error.message,
        });
    }
}

export function* watchSignInUser(){
    yield takeLatest(t.SIGNIN_FAILURE, signInUser);
}
