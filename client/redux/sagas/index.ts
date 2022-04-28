import { all } from 'redux-saga/effects';
import { watchRegist, watchEdit } from "./sacSaga.ts";

export default function* rootSaga() {
    yield all([watchRegist(), watchEdit()]);
}