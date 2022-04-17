import React, {useState} from "react";

export default function register () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const emailHandler = event => {
        setEmail(event.currentTarget.value);
    }
    const passwordHandler = event => {
        setPassword(event.currentTarget.value);
    }
    const confirmPasswordHandler = event => {
        setConfirmPassword(event.currentTarget.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        alert("회원등록!");
    }

    return <div>
        <div className={"border-bottom"}>
            <h2 className="bd-title" id="content">Register</h2>
        </div>
        <br/>
        <form>
            <div className={"form-group"}>
                <label>Email</label>
                <input className="form-control" type={'email'} value={email} onChange={emailHandler} />
                <label>password</label>
                <input className="form-control" type={'password'} value={password} onChange={passwordHandler} />
                <label>comfirm password</label>
                <input className="form-control" type={'password'} value={confirmPassword} onChange={confirmPasswordHandler} />
                <br/>
                <button className="btn btn-primary" type={'submit'} onSubmit={submitHandler}>
                    register
                </button>
            </div>
        </form>
    </div>
}