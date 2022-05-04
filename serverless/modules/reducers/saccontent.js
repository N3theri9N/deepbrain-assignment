import { HYDRATE } from "next-redux-wrapper";
import * as t from "../types";

const initialState = {
    saccontentList: [],
    selectedSacContent: undefined,
    isModalOpen: false,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case t.MODAL_OPEN:
            return {
                ...state,
                isModalOpen: action.payload,
            };
        case t.SAC_CONTENT_FETCH_SUCCEEDED:
            return {
                ...state,
                saccontentList: action.payload,
            };
        case t.SAC_CONTENT_ADD_SUCCEEDED:
            return {
                ...state,
                saccontentList: [action.payload, ...state.saccontentList],
            };
        case t.SAC_CONTENT_UPDATE_SUCCEEDED:
            const updatedSacContent = state.saccontentList.map((saccontent) => {
                if (saccontent._id === action.payload._id) {
                    return {
                        ...saccontent,
                        title: action.payload.title,
                        place: action.payload.place,
                        type: action.payload.type,
                        startDate: action.payload.startDate,
                        endDate: action.payload.endDate,
                        audience: action.payload.audience,
                    };
                }
                return saccontent;
            });

            return { ...state, saccontentList: updatedSacContent };
        case t.SAC_CONTENT_DELETE_SUCCEEDED:
            const newSacContentList = state.saccontentList.filter(
                (saccontent) => saccontent._id !== action.payload
            );
            return {
                ...state,
                saccontentList: newSacContentList,
            };
        case t.SAC_CONTENT_SELECTED:
            const selectedSacContent = state.saccontentList.find(
                (saccontent) => saccontent._id === action.payload
            );
            return {
                ...state,
                selectedSacContent,
            };
        default:
            return state;
    }
};

export default mainReducer;