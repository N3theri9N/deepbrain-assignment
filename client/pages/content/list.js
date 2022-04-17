import React from 'react';

export default function list () {
    return <div>
        <div className={"border-bottom"}>
            <h2 className="bd-title" id="content">Content List</h2>
        </div>
        <br/>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">header</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>데이터가 존재하지 않습니다.</td>
            </tr>
            </tbody>
        </table>
    </div>
}