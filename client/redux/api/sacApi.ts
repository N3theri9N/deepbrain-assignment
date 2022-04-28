import axios, {AxiosResponse} from "axios";

const SERVER = 'http://127.0.0.1:4000'
const headers = {
    "Content-Type" : "application/json"
}

export interface SacType {
    place : string;
    title : string;
    type : string;
    startDate : string;
    endDate : string;
    audience : string;
}

export const sacRegistApi = async ( payload : {
    place : string;
    title : string;
    type : string;
    startDate : string;
    endDate : string;
    audience : string;
}) => {
    try {
//        alert("API 실행 payload : "+ JSON.stringify(payload))
        const response : AxiosResponse<unknown, SacType[]> =
            await axios.post(`${SERVER}/sac/registSac`, payload ,{headers}
        );
        return response.data
    } catch (err) {
        return err;
    }
}


export const sacEditApi = async ( payload : {
    _id : string;
    place : string;
    title : string;
    type : string;
    startDate : string;
    endDate : string;
    audience : string;
}) => {
    try {
        //alert("API 실행 payload : "+ JSON.stringify(payload))
        const response : AxiosResponse<unknown, SacType[]> =
            await axios.post(`${SERVER}/sac/updateSac`, payload ,{headers}
        );
        return response.data
    } catch (err) {
        return err;
    }
}



