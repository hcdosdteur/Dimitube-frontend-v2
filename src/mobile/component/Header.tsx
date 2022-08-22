import "@mobile/css/Header.scoped.scss";
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
			<div id="header-top">top</div>
			<div id="header-bottom">
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
