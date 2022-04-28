// userSaga 에서는 index 를 계속 바라본다.
import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { sacActions } from '../reducers/sacReducer.ts';
import {sacRegistApi, sacEditApi } from '../api/sacApi.ts'


export interface SacRegistType {
    type : string,
    payload : {
        _id : string;
        place : string;
        title : string;
        type : string;
        startDate : string;
        endDate : string;
        audience : string;
    }
}


interface SacRegistSuccessType{
    type: string;
    payload: {
        success: string
    }
}

export function* sacRegist(sac : SacRegistType){
    try {
        const response: SacRegistSuccessType = yield sacRegistApi(sac.payload)
        yield put(sacActions.registSuccess(response))
    } catch( error ) {
        yield put(sacActions.registFailure(error))
    }
}

export function* watchRegist() {
    yield takeLatest(sacActions.registRequest, sacRegist);
}

export function* sacEdit(sac : SacRegistType){
    try {
        const response: SacRegistSuccessType = yield sacEditApi(sac.payload)
        yield put(sacActions.editSuccess(response))
    } catch( error ) {
        yield put(sacActions.editFailure(error))
    }
}

export function* watchEdit() {
    yield takeLatest(sacActions.editRequest, sacEdit);
}
