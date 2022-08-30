import "@mobile/css/Header.scoped.scss";
import logo from "@img/logo.png";
import search from "@img/search.png";
import home from "@img/home.png";
import explore from "@img/explore.png";
import mobile_upload from "@img/mobile_upload_1.png";
import history from "@img/history.png";
import videos from "@img/videos.png";
import back from "@img/back.png";
import Icon_feather_settings from "@img/Icon_feather-settings.png";
import subscribe from "@img/subscribe.png";
import profile from "@img/pop-cat.gif";
import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
	const style = {
		link: {
			textDecoration: "none",
			color: "black",
		},
	};

	const [searchDetail, setSearchDetail] = useState<boolean>(false);
	const headerTop = useRef<HTMLDivElement>(null);

	let lastScrollY = 0;
	let nowDirection: string = "";

	const searchToggle = () => {
		searchDetail === false ? setSearchDetail(true) : setSearchDetail(false);
	};

	const handleScroll = useCallback(() => {
		const scrollY = window.scrollY;
		const headerTop_cur = headerTop.current;
		const direction: string =
			scrollY > lastScrollY && scrollY >= 48 ? "down" : "up";
		lastScrollY = scrollY;
		if (nowDirection !== direction) {
			if (direction === "down") {
				headerTop_cur?.classList.add("up");
				headerTop_cur?.classList.remove("down");
			} else if (direction === "up") {
				headerTop_cur?.classList.add("down");
				headerTop_cur?.classList.remove("up");
			}
		}
		nowDirection = direction;
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { capture: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div id="header-container">
			<div className={`search-box ${searchDetail ? "" : "hidden"}`}>
				<img className="back" src={back} onClick={searchToggle} alt="" />
				<input className="input-box" type="text" />
				<Link to="/search">
					<img className="search" src={search} alt="" />
				</Link>
			</div>
			<div id="header-top" ref={headerTop}>
				<div id="logo-box">
					<Link style={style.link} to="/">
						<img src={logo} alt="" />
						<div>DmTube</div>
					</Link>
				</div>
				<nav className="btn-box">
					<ul>
						<li>
							<button className="btn" onClick={searchToggle}>
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
						<li>
							<img src={home} alt="" />
							<div>홈</div>
						</li>
						<li>
							<img src={explore} alt="" />
							<div>탐색</div>
						</li>
						<li>
							<Link to="/">
								<img className="upload" src={mobile_upload} alt="" />
							</Link>
						</li>
						<li>
							<img src={subscribe} alt="" />
							<div>구독</div>
						</li>
						<li>
							<img src={videos} alt="" />
							<div>영상</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Header;
