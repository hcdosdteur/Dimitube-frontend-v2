import "../css/Header.scoped.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import search from '../../img/search.png';
import Icon_feather_settings from '../../img/Icon_feather-settings.png';
import Icon_feather_user from '../../img/Icon_feather-user.png';
import logout_icon from '../../img/logout_icon.png';
import Sidebar from "./Sidebar";

function Header() {
	const style = {
		link: {
			textDecoration: "none",
			color: "black",
		},
	};

	const [isOpen, setIsopen] = useState(false);
	const [isClose, setIsClose] = useState(false);
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const resizing = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	const ToggleSidebar = () => {
		if (!isClose) {
			isOpen === true ? setIsopen(false) : setIsopen(true);
			setIsClose(true);
			setTimeout(() => {
				setIsClose(false);
			}, 100);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", resizing);
		return () => {
			window.removeEventListener("resize", resizing);
		};
	}, []);

	return (
		<div>
			<header id="main-header">
				<div className="header-left">
					<Link style={style.link} to="/">
						<div className="logo-box">
							<img className="logo" src={logo} alt="" />
							<h2>Dimitube</h2>
						</div>
					</Link>
				</div>
				<div
					id="search-container"
					className={`${windowSize.width <= 650 ? "hidden" : ""}`}
				>
					<input type="text" />
					<Link to="/search">
						<img src={search} alt="" />
					</Link>
				</div>
				<nav>
					<ul>
						<li
							className={`li-search ${windowSize.width > 650 ? "hidden" : ""}`}
						>
							<Link to="/search">
								<img src={search} alt="" />
							</Link>
						</li>
						<li>
							<Link to="/setting">
								<img
									className="header-img"
									src={Icon_feather_settings}
									alt=""
								/>
							</Link>
						</li>
						<li>
							<Link to="/channel">
								<img
									className="header-img"
									src={Icon_feather_user}
									alt=""
								/>
							</Link>
						</li>
						<li>
							<Link to="/signin">
								<img
									className="header-img"
									src={logout_icon}
									alt=""
								/>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Sidebar isOpen={isOpen} toggleSidebar={ToggleSidebar} />
		</div>
	);
}

export default Header;
