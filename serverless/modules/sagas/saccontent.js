import { put, takeLatest } from "redux-saga/effects";
import * as t from "../types";

function* fetchSacContents() {
    try {
        const response = yield fetch("/api/saccontent");

        const saccontentList = yield response.json();

        yield put({
            type: t.SAC_CONTENT_FETCH_SUCCEEDED,
            payload: saccontentList.data,
        });
    } catch (error) {
        yield put({
            type: t.SAC_CONTENT_FETCH_FAILED,
            payload: error.message,
        });
    }
}

export function* watchFetchSacContents() {
    yield takeLatest(t.SAC_CONTENT_FETCH_REQUESTED, fetchSacContents);
}

function* addSacContent(action) {
    try {
        const response = yield fetch("/api/saccontent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload),
        });

        const newEmployee = yield response.json();

        yield put({
            type: t.SAC_CONTENT_ADD_SUCCEEDED,
            payload: newEmployee.data,
        });
    } catch (error) {
        yield put({
            type: t.SAC_CONTENT_ADD_FAILED,
            payload: error.message,
        });
    }
}

export function* watchAddSacContent() {
    yield takeLatest(t.SAC_CONTENT_ADD_REQUESTED, addSacContent);
}

function* deleteSacContent(action) {
    try {
        const response = yield fetch("/api/saccontent/" + action.payload, {
            method: "DELETE",
        });

        const deletedSacContent = yield response.json();

        yield put({
            type: t.SAC_CONTENT_DELETE_SUCCEEDED,
            payload: deletedSacContent.data.id,
        });
    } catch (error) {
        yield put({
            type: t.SAC_CONTENT_DELETE_FAILED,
            payload: error.message,
        });
    }
}

export function* watchRemoveSacContent() {
    yield takeLatest(t.SAC_CONTENT_DELETE_REQUESTED, deleteSacContent);
}

function* updateSacContent(action) {
    try {
        const response = yield fetch("/api/saccontent/" + action.payload._id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload),
        });

        const updatedSacContent = yield response.json();

        yield put({
            type: t.SAC_CONTENT_UPDATE_SUCCEEDED,
            payload: updatedSacContent.data,
        });
    } catch (error) {
        yield put({
            type: t.SAC_CONTENT_UPDATE_FAILED,
            payload: error.message,
        });
    }
}

export function* watchUpdateSacContent() {
    yield takeLatest(t.SAC_CONTENT_UPDATE_REQUESTED, updateSacContent);
}
