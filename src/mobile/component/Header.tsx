import "@mobile/css/Header.scoped.scss";
import logo from "@img/logo.png";
import search from "@img/search.png";
import profile from "@img/pop-cat.gif";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
	const style = {
		link: {
			textDecoration: "none",
			color: "black",
		},
	};

	return (
		<div id="header-container">
			<div id="header-top">
				<div id="logo-box">
					<Link style={style.link} to="/">
						<img src={logo} alt="" />
						<div>DmTube</div>
					</Link>
				</div>
				<nav className="btn-box">
					<ul>
						<li>
							<button className="btn">
								<img src={search} alt="" />
							</button>
						</li>
						<li>
							<Link style={style.link} to="/channel">
								<div className="btn">
									<img src={profile} alt="" />
								</div>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="header-bottom">
				<nav>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Header;
