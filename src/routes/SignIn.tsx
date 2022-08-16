import "css/contents-container.css";
import { Link } from "react-router-dom";

function SignIn() {
	const style = {
		container: {
			justifyContent: "center",
			margin: "100px",
		},
		h1: {
			height: "50px",
		},
		fontSize: {
			fontSize: "25px",
		},
		title: {
			display: "flex",
		},
		logoImg: {
			marginRight: "10px",
		},
	};
	return (
		<div style={style.container}>
			<div style={style.title}>
				<img style={style.logoImg} src={require("img/logo.png")} alt="" />{" "}
				<span style={style.fontSize}>Dimitube</span>
			</div>
			<h1 style={style.h1}>SignIn Page</h1>
			<Link style={style.fontSize} to="/">
				SignIn
			</Link>
		</div>
	);
}

export default SignIn;
