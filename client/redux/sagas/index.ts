import { all } from 'redux-saga/effects';
import { watchRegist } from "./sacSaga.ts";

export default function* rootSaga() {
    yield all([watchRegist()]);
}