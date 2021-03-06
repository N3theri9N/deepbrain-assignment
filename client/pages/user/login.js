import React, { useState } from 'react';

export default function login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = event => {
        setEmail(event.currentTarget.value);
    }
    const passwordHandler = event => {
        setPassword(event.currentTarget.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        alert("로그인!");
    }

    return <div>
        <div className={"border-bottom mt-4 mb-4"}>
            <h2 className="bd-title" id="content">Sign in</h2>
        </div>
        <br/>
        <form>
            <div className={"form-group"}>
                <label>Email</label>
                <input className="form-control" type={'email'} value={email} onChange={emailHandler} />
                <label>password</label>
                <input className="form-control" type={'password'} value={password} onChange={passwordHandler} />
                <br/>
                <button className="btn btn-primary" type={'submit'} onClick={submitHandler}>
                    signin
                </button>
            </div>
        </form>
    </div>
}