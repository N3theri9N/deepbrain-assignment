import * as t from "../types";

export const setModalOpen = (isModalOpen) => {
    return {
        type: t.MODAL_OPEN,
        payload: isModalOpen,
    };
};

export const fetchSacContents = () => {
    return {
        type: t.SAC_CONTENT_FETCH_REQUESTED,
    };
};

export const addSacContent = (saccontent) => {
    return {
        type: t.SAC_CONTENT_ADD_REQUESTED,
        payload: saccontent,
    };
};

export const updateSacContent = (saccontent) => {
    return {
        type: t.SAC_CONTENT_UPDATE_REQUESTED,
        payload: saccontent,
    };
};

export const deleteSacContent = (id) => {
    return {
        type: t.SAC_CONTENT_DELETE_REQUESTED,
        payload: id,
    };
};

export const setSelectedSacContent = (id) => {
    return {
        type: t.SAC_CONTENT_SELECTED,
        payload: id,
    };
};