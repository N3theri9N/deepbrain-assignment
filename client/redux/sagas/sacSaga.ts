// userSaga 에서는 index 를 계속 바라본다.
import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { sacActions } from '../reducers/sacReducer.ts';
import {sacRegistApi, sacRegisterApi} from '../api/sacApi.ts'


export interface SacRegistType {
    type : string,
    payload : {
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
