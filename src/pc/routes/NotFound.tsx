import "../css/NotFound.scoped.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../img/logo.png'

function PcNotFound() {
	const navigate = useNavigate();
	const style = {
		flex: {
			display: "flex",
		},
		link: {
			height: "100%",
		},
	};
	return (
		<div style={style.flex} id="notFound-container">
			<div style={style.flex}>
				<img id="notFound-logo" src={logo} alt="" />
				<div>
					<h1 id="error-title">
						<span id="error404">404</span> ERROR
						<div>Page Not Found :&#40;</div>
					</h1>
					<div id="error-message">
						The requested URL does not exist or is unavailable. <br />
						Please go back to the homepage
					</div>
					<div id="notFound-btn-box">
						<button
							className="notFound-btn"
							onClick={() => navigate(-1)}
							id="goBack-btn"
						>
							GO BACK
						</button>
						<Link style={style.link} to="/">
							<button className="notFound-btn" id="goHome-btn">
								GO HOME
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PcNotFound;
