import { useRouter } from 'next/router'

export function Header() {
	const router = useRouter();
	function Greeting() {

		if (router.pathname.indexOf("login") > -1) {
			return <span>LOGIN</span>;
		}
		return <span>SIGN UP</span>;
	}

	return (
		<header className="header">
			<h1 className="header__h1">
				<Greeting />

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
