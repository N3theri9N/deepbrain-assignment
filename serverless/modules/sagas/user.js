import * as t from "../types";
import {put, takeLatest } from "redux-saga/effects";

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
        yield put(window.location.href = "./login");

    } catch (error) {
        yield put({
            type: t.SIGNIN_FAILURE,
            payload: error.message,
        });
        yield put(alert("가입에 실패했습니다."))
    }
}

export function* watchSignInUser(){
    yield takeLatest(t.SIGNIN_REQUESTED, signInUser);
}

function* loginUser(action){
    try{
        const response = yield fetch("/api/user/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(action.payload)
        })

        const newUser = yield response.json();
        yield put({
            type: t.LOGIN_SUCCESS,
            payload: newUser.data,
        });
    } catch (error){
        yield put({
            type: t.LOGIN_FAILURE,
            payload: error.message,
        });
    }
}

export function* watchLogin(){
    yield takeLatest(t.LOGIN_REQUESTED, loginUser);
}
