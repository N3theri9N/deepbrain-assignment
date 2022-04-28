import React, { useEffect, useState } from "react";

export default function HeaderComponent(){

    const [navTitle, setNavTitle] = useState([]);
    const [navUrl, setNavUrl] = useState([]);

    useEffect(() => {
        const loginUser = localStorage.getItem("loginUser");
        /*if( loginUser === null){*/
            setNavTitle(["login", "join", "board"])
            setNavUrl(["/user/login", "/user/join", "/sacBoard/list"])
        /*} else {
            setNavTitle(["board", "logout"])
            setNavUrl(["/sacBoard/list", "/user/logout"])
        }*/
    }, []);

    return (
        <header className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <ul className={"nav"}>
                <NavMenu urls={navUrl} titles={navTitle} />
            </ul>
        </header>
    )
}

const NavMenu = (props) => {
    { return props.urls.map(function(url, i){
        return (<li key={i} className={"nav-item"}>
            <a className={"nav-link h4"} href={url}>{props.titles[i]}</a>
        </li>);
    })}


}