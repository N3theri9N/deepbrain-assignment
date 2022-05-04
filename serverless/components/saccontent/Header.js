import { useDispatch } from "react-redux";
import { PersonAddSVG } from "@/icons";
import { setModalOpen } from "@/modules";

export function Header() {
	const dispatch = useDispatch();

	return (
		<header className="header">
			<h1 className="header__h1">
				<span>SEOUL ART CENTER 2018</span>
			</h1>
			<button
				className="btn btn__primary"
				onClick={()=>{ location.href = "../user/login"}}
			>
				로그아웃
			</button>

			<button
				className="btn btn__primary btn__icon"
				onClick={() => {
					dispatch(setModalOpen(true));
				}}
			>
				<PersonAddSVG /> <span>생성</span>
			</button>
		</header>
	);
}
