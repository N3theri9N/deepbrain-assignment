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
        alert("API 실행 payload : "+ JSON.stringify(payload))
        const response : AxiosResponse<unknown, SacType[]> =
            await axios.post(`${SERVER}/sac/regist`, payload ,{headers}
        );
        return response.data
    } catch (err) {
        return err;
    }
}

