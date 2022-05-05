export function Header() {


	const UserTitle = () => {

			return <span>LOGIN</span>
		/*else
			return <span>SIGN IN</span>*/
	}

	return (
		<header className="header">
			<h1 className="header__h1">
				<UserTitle />
			</h1>
			<button
				className="btn btn__primary btn__icon"
				onClick={() => {
					location.href = "./join"
				}}
			>
				가입
			</button>
		</header>
	);
}
