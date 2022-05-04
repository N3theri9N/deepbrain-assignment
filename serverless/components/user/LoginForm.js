export function LoginForm(){
    return (
        <form className="form">
            <div className={"form__element"}>
                <label className={"label"} htmlFor="idInput">
                    id
                </label>
                <input
                    type="text"
                    id="idInput"
                    name="id"
                    placeholder="id"
                    className="input" />

            </div>

            <div className={"form__element"}>
                <label className={"label"} htmlFor="pwInput">
                    password
                </label>
                <input
                    type="password"
                    id="pwInput"
                    name="email"
                    placeholder="password"
                    className="input" />
            </div>

            <div className="form__action">
                <button className="btn btn__primary btn__icon" type="submit">
                    로그인
                </button>
            </div>

        </form>
    );
}