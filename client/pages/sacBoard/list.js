import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function list () {
    const proxy = 'http://localhost:4000'
    const columns = ["공연이름", "장소", "형식", "공연시작일", "공연종료일", "관람객 수"];
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${proxy}/sac/getSac`).then(res => {
            setData(res.data.sac);
        })
    }, []);

    const relocateRegister = () => {
        location.href = "./register";
    }

    const redirectToEdit = (event, sacId) => {
        event.preventDefault();
        location.href = `./edit?${sacId}`;
    }

    const deleteHandler = (event, sacId) => {
        event.preventDefault();
        if(confirm("해당 컨텐츠를 삭제하겠습니까?")){
            axios.post(`${proxy}/sac/deleteSac/${sacId}`).then(()=>{
                alert("삭제 완료");
                location.reload();
            }).catch(()=>{
                alert("오류가 발생했습니다.")
            })
        }
    }

    return <div>
        <div className={"border-bottom mt-4 mb-4"}>
            <h2 className="bd-title" id="content">2018. Seoul Art Center</h2>
        </div>
        <div className={"btn-group"}>
            <input type={"button"} className={"btn btn-primary"} onClick={relocateRegister} value={"추가"} />
        </div>
        <br/>
        <table className="table">
            <thead>
            <tr>
                {columns.map((column, index) => { // index 는 반드시 넣어야한다.
                    return <th key={index}>{column}</th>
                })}
            </tr>
            </thead>
            <tbody>
                {data.length === 0
                    ? <tr>
                        <td colSpan={6}>데이터는 추후에 추가 예정입니다.</td>
                    </tr>
                    : data.map((sac) => {
                        return <tr key={sac._id}>
                            <td>{sac.title}</td>
                            <td>{sac.place}</td>
                            <td>{sac.type}</td>
                            <td>{sac.startDate}</td>
                            <td>{sac.endDate}</td>
                            <td>{sac.audience}</td>
                            <td>
                                <button type="button" className="btn btn-sm btn-warning" onClick={() => {redirectToEdit(event, sac._id)} }>편집</button>
                                <button type="button" className="btn btn-sm btn-danger" onClick={() => {deleteHandler(event, sac._id)}}>삭제</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
}