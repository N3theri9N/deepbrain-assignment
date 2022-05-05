import {useDispatch, useSelector} from "react-redux";
import { PersonAddSVG } from "@/icons";
import { setModalOpen, logoutUser } from "@/modules";
import { useRouter } from 'next/router'
import {useEffect} from "react";

export function Header() {

	const userState = useSelector((state) => state.user);

	const router = useRouter();
	const dispatch = useDispatch();

	const logoutHandler = () => {
		localStorage.removeItem("user")
		dispatch(logoutUser());
		router.push("/user/login");
	}



	useEffect(() => {
		const loginData = JSON.parse(localStorage.getItem("user"));
		if(!loginData || !loginData.id){
			localStorage.removeItem("user")
			router.push("/user/login");
		}
	}, )

	return (
		<header className="header">
			<h1 className="header__h1">
				<span>SEOUL ART CENTER 2018</span>
			</h1>
			<button
				className="btn btn__primary"
				onClick={logoutHandler}
			>
				로그아웃
			</button>

			<button
				className="btn btn__primary"
				onClick={() => {
					dispatch(setModalOpen(true));
				}}
			>
				<span>생성</span>
			</button>
		</header>
	);
}
