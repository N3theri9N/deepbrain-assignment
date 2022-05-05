import {useDispatch } from "react-redux";
import {useForm} from "react-hook-form";
import { signInUser } from "@/modules";

export function SigninForm(){

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmitHandler = (data) => {

        if(data){
            if(data.pw !== data.cpw){
                alert("입력된 암호와 확인 암호가 다릅니다!");
            }
            var joinUser = {
                "id" : data.id,
                "email" : data.email,
                "pw" : data.pw
            }
            dispatch(signInUser(joinUser));
        }
    }

    return (
        <form className="form"
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
        >
            <div className={"form__element"}>
                <label className={"label"} htmlFor="idInput">
                    id
                </label>
                <input
                    type="text"
                    id="idInput"
                    name="id"
                    placeholder="id"
                    className="input"
                    ref={register({ required: true })}
                />
            </div>

            <div className={"form__element"}>
                <label className={"label"} htmlFor="emailInput">
                    email
                </label>
                <input
                    type="email"
                    id="emailInput"
                    name="email"
                    placeholder="email"
                    className="input"
                    ref={register({ required : true })}
                />

            </div>

            <div className={"form__element"}>
                <label className={"label"} htmlFor="pwInput">
                    password
                </label>
                <input
                    type="password"
                    id="pwInput"
                    name="pw"
                    placeholder="password"
                    className="input"
                    ref={register({ required : true })}
                />
            </div>

            <div className={"form__element"}>
                <label className={"label"} htmlFor="pwConfirmInput">
                    password confirm
                </label>
                <input
                    type="password"
                    id="pwConfirmInput"
                    name="cpw"
                    placeholder="password confirm"
                    className="input"
                    ref={register({ required : true })}
                />
            </div>

            <div className="form__action">
                <button className="btn btn__primary btn__icon" type="submit">
                    등록
                </button>
            </div>

        </form>
    );
}