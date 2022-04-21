import React from 'react';
import axios from "axios";

export default function list () {
    const proxy = 'http://localhost:4000'

    const loadsacData = () => {

        axios.get(`${proxy}/sac/0`).then((res) => {
            console.log(res.data); // http://localhost:4000/sac/0 호출 결과를 리턴
        });
    }

    return <div>
        <div className={"border-bottom mt-4 mb-4"}>
            <h2 className="bd-title" id="content">Content List</h2>
        </div>
        <br/>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">테이블 헤더</th>
            </tr>
            </thead>
            <tbody>
            <tr id={"tableRow"}>
                <td>데이터가 비어있습니다!</td>
            </tr>
            </tbody>
        </table>
        <input type={"button"} onClick={loadsacData} value={"내용 호출 테스트"} />

    </div>
}