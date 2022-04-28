import { createSlice } from "@reduxjs/toolkit"

export interface SacType {
    place : string;
    title : string;
    type : string;
    startDate : string;
    endDate : string;
    audience : string;
}

export interface SacState {
    loading : boolean;
    data : SacState[];
    error : any;
}

const initialState : SacState = {
    loading : false,
    data : [],
    error : null
}

const sacSlice = createSlice({
    name: 'sac',
    initialState,
    reducers : {
        registRequest(state : SacState, payload){
            state.loading = true;
        },
        registSuccess(state: SacState, {payload}){
            alert("등록 완료");
            state.data = [...state.data, payload]
            state.loading = false;
            location.href = "./list"
        },
        registFailure(state: SacState, {payload}){
            alert("등록에 실패했습니다.");
            state.data = payload;
            state.loading = false;
        },
        editRequest(state : SacState, payload){
            state.loading = true;
        },
        editSuccess(state: SacState, {payload}) {
            alert("수정 완료");
            state.data = [...state.data, payload]
            state.loading = false;
            location.href = "./list"
        },
        editFailure(state: SacState, {payload}) {
            alert("수정에 실패했습니다.");
            state.data = payload;
            state.loading = false;
        },
        delRequest(state : SacState, payload){
            state.loading = true;
        },
        delSuccess(state: SacState, {payload}) {
            alert("삭제 완료");
            state.data = [...state.data, payload]
            state.loading = false;
            location.reload();
        },
        delFailure(state: SacState, {payload}) {
            alert("삭제에 실패했습니다.");
            state.data = payload;
            state.loading = false;
        }

    }
})

const { reducer , actions } = sacSlice
export const sacActions = actions;
export default reducer
