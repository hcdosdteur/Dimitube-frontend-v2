import "../css/contents-container.scoped.scss";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';

function PcSignIn() {
	const style = {
		container: {
			justifyContent: "center",
			margin: "100px",
			marginTop: "50px",
			zIndex: "1000",
			backgroundColor: "rgb(245, 245, 245)",
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
				<img style={style.logoImg} src={logo} alt="" />{" "}
				<span style={style.fontSize}>Dimitube</span>
			</div>
			<h1 style={style.h1}>PcSignIn Page</h1>
			<Link style={style.fontSize} to="/">
				SignIn
			</Link>
		</div>
	);
}

export default PcSignIn;
