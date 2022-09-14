import "@mobile/css/Header.scoped.scss";
import logo from "@img/logo.png";
import search from "@img/search.png";
import home from "@img/home.png";
import explore from "@img/explore.png";
import mobile_upload from "@img/mobile_upload_1.png";
import videos from "@img/videos.png";
import back from "@img/back.png";
import subscribe from "@img/subscribe.png";
import profile from "@img/pop-cat.gif";
import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
	const urlPath = useLocation();
	const [searchDetail, setSearchDetail] = useState<boolean>(false);
	const [tab, setTab] = useState<string>(`${urlPath.pathname}`);
	const headerTop = useRef<HTMLDivElement>(null);
	const search_input = useRef<HTMLInputElement>(null);

	let lastScrollY = 0;
	let nowDirection: string = "";

	const searchToggle = () => {
		if (searchDetail === false) {
			setSearchDetail(true);
			setTimeout(() => {
				search_input.current?.focus();
			}, 10);
		} else setSearchDetail(false);
	};

	const handleScroll = useCallback(() => {
		const scrollY = window.scrollY;
		const headerTop_cur = headerTop.current;
		const direction: string =
			scrollY > lastScrollY && scrollY >= 48 ? "down" : "up";
		lastScrollY = scrollY;
		if (nowDirection !== direction && urlPath.pathname === "/") {
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

	const click_menuBtn = (tabStr: string) => {
		setTab(tabStr);
	};

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
				<input className="input-box" type="text" ref={search_input} />
				<Link to="/search">
					<img className="search" src={search} alt="" />
				</Link>
			</div>
			<div
				className={`search-overlay ${searchDetail ? "" : "hidden"}`}
				onClick={searchToggle}
			></div>
			<div id="header-top" ref={headerTop}>
				<div id="logo-box">
					<Link to="/">
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
							<Link to="/channel">
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
							<Link to="/">
								<div
									className={`menu-btn ${tab === "/" ? "active" : ""}`}
									onClick={() => click_menuBtn("/")}
								>
									<img src={home} alt="" />
									<div>홈</div>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/">
								<div
									className={`menu-btn ${tab === "/explore" ? "active" : ""}`}
									onClick={() => click_menuBtn("/explore")}
								>
									<img src={explore} alt="" />
									<div>탐색</div>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/upload">
								<img
									className="upload"
									onClick={() => click_menuBtn("upload")}
									src={mobile_upload}
									alt=""
								/>
							</Link>
						</li>
						<li>
							<Link to="/">
								<div
									className={`menu-btn ${tab === "/subscribe" ? "active" : ""}`}
									onClick={() => click_menuBtn("/subscribe")}
								>
									<img src={subscribe} alt="" />
									<div>구독</div>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/">
								<div
									className={`menu-btn ${tab === "/videos" ? "active" : ""}`}
									onClick={() => click_menuBtn("/videos")}
								>
									<img src={videos} alt="" />
									<div>영상</div>
								</div>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Header;
