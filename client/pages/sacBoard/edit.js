import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sacActions } from "../../redux/reducers/sacReducer.ts";
import axios from "axios";


export default function register() {
    const proxy = 'http://localhost:4000'

    const dispatch = useDispatch();
    const [sacData, setSacData] = useState({
        _id : "",
        place : "",
        title : "",
        type : "",
        startDate : "",
        endDate : "",
        audience : ""
    });

    useEffect(()=>{
        const id = window.location.search.split('?')[1];
        axios.get(`${proxy}/sac/getSac/${id}`).then(res => {
            setSacData(res.data.sac);
        })
    }, []);

    const handleChange = e => {
        e.preventDefault()
        const{name, value} = e.target;
        setSacData({...sacData,[name]: value});
    }

    return (<div>
        <div className={"border-bottom mt-4 mb-4"}>
            <h2 className="bd-title" id="content">2018. Seoul Art Center</h2>
        </div>
        <br />
        <form onSubmit={e =>{
            e.preventDefault()
            dispatch(sacActions.editRequest(sacData))
        }
        }>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>공간명</label>
                <div className={"col-10"}>
                    <select className={"form-control"} onChange={handleChange} name={"place"} value={sacData.place}>
                        <option>예술의전당</option>
                        <option>예술의전당 CJ 토월극장</option>
                        <option>예술의전당 IBK챔버홀</option>
                        <option>예술의전당 리사이틀홀</option>
                        <option>예술의전당 서울서예박물관</option>
                        <option>예술의전당 신세계스퀘어 야외무대</option>
                        <option>예술의전당 오페라극장</option>
                        <option>예술의전당 자유소극장</option>
                        <option>예술의전당 콘서트홀</option>
                        <option>예술의전당 한가람디자인미술관</option>
                        <option>예술의전당 한가람미술관</option>
                    </select>
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>공연명</label>
                <div className={"col-10"}>
                    <input type={"text"} className={"form-control"} onChange={handleChange} name={"title"} value={sacData.title} />
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>시작일</label>
                <div className={"col-10"}>
                    <input type={"date"} className={"form-control"} onChange={handleChange} name={"startDate"} value={sacData.startDate} />
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>종료일</label>
                <div className={"col-10"}>
                    <input type={"date"} className={"form-control"} onChange={handleChange} name={"endDate"} value={sacData.endDate} />
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>기획대관구분</label>
                <div className={"col-10"}>
                    <select className={"form-control"} onChange={handleChange} name={"type"} value={sacData.type}>
                        <option>대관</option>
                        <option>기획</option>
                    </select>
                </div>
            </div>
            <br/>
            <div className="form-group row">
                <label className={"col-form-label col-2"}>관객수</label>
                <div className={"col-10"}>
                    <input type={"number"} className={"form-control"} onChange={handleChange} name={"audience"} value={sacData.audience} />
                </div>
            </div>
            <br />
            <button className={"btn btn-warning"} type="submit">수정</button>
        </form>
    </div>)
}