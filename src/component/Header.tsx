import "css/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
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

	const menuBtnClickEvent = (menu: HTMLElement) => {
		menu.className = "clickEffect-menu-btn";
		menu.addEventListener("animationend", () => {
			menu.classList.remove("clickEffect-menu-btn");
		});
		ToggleSidebar();
	};

	const ToggleSidebar = () => {
		if (!isClose) {
			isOpen === true ? setIsopen(false) : setIsopen(true);
			setIsClose(true);
			setTimeout(() => {
				setIsClose(false);
			}, 200);
		}
	};

	return (
		<div>
			<header id="main-header">
				<div id="header-left">
					<div
						onClick={(e) => menuBtnClickEvent(e.target as any)}
						id="menu-btn"
					></div>
					<Link style={style.link} to="/">
						<div id="logo-box">
							<img id="logo" src={require("img/logo.png")} alt="" />
							<h2>Dimitube</h2>
						</div>
					</Link>
				</div>
				<div id="search-container">
					<input type="text" />
					<Link to="/search">
						<img src={require("img/search.png")} alt="" />
					</Link>
				</div>
				<nav>
					<ul>
						<li>
							<Link to="/setting">
								<img
									className="header-img"
									src={require("img/Icon_feather-settings.png")}
									alt=""
								/>
							</Link>
						</li>
						<li>
							<Link to="/channel">
								<img
									className="header-img"
									src={require("img/Icon_feather-user.png")}
									alt=""
								/>
							</Link>
						</li>
						<li>
							<Link to="/signin">
								<img
									className="header-img"
									src={require("img/logout_icon.png")}
									alt=""
								/>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Sidebar
				isOpen={isOpen}
				isClose={isClose}
				toggleSidebar={ToggleSidebar}
			/>
		</div>
	);
}

export default Header;
