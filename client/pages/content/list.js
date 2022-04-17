import React from 'react';

export default function list () {
    return <div>
        <div className={"border-bottom mt-4 mb-4"}>
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
                <td>Data Empty</td>
            </tr>
            </tbody>
        </table>
    </div>
}