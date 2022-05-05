import {all} from "redux-saga/effects";
import { watchFetchEmployees, watchAddEmployee, watchRemoveEmployee, watchUpdateEmployee } from "./employee";
import { watchFetchSacContents, watchAddSacContent, watchRemoveSacContent, watchUpdateSacContent } from "./saccontent";
import { watchSignInUser, watchLogin, watchLogout } from "./user"

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