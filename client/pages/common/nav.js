import React from "react";

function HeaderComponent(){
    return (
        <header className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <ul className={"nav"}>
                <li className={"nav-item"}>
                    <a className="nav-link h4" href="/">Next Home</a>
                </li>
                <li className={"nav-item"}>
                    <a className="nav-link h4" href="/sacBoard/list">Board</a>
                </li>
            </ul>
            <ul className={"nav navbar-right"}>
                <li className={"nav-item"}>
                    <a className={"nav-link h4"} href="/user/login">Login</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link h4"} href="/user/join">Join</a>
                </li>
            </ul>
        </header>
    )
}

export default HeaderComponent;