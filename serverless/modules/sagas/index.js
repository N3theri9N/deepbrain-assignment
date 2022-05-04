import {all} from "redux-saga/effects";
import { watchFetchEmployees, watchAddEmployee, watchRemoveEmployee, watchUpdateEmployee } from "./employee";
import { watchFetchSacContents, watchAddSacContent, watchRemoveSacContent, watchUpdateSacContent } from "./saccontent";


export default function* rootSaga() {
    yield all([
        watchFetchEmployees(),
        watchAddEmployee(),
        watchRemoveEmployee(),
        watchUpdateEmployee(),

        watchFetchSacContents(),
        watchAddSacContent(),
        watchRemoveSacContent(),
        watchUpdateSacContent(),
    ]);
}