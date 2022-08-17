import "css/Sidebar.css";
import { Link } from "react-router-dom";

type SidebarProps = {
	isOpen: boolean;
	toggleSidebar: any;
};

function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
	const menuBtnClickEvent = (menu: HTMLElement) => {
		menu.className = "clickEffect-menu-btn";
		menu.addEventListener("animationend", () => {
			menu.classList.remove("clickEffect-menu-btn");
		});
		toggleSidebar();
	};

	return (
		<div>
			<div className={`sidebar ${isOpen === true ? "active" : ""}`}>
				<div id="sb-header">
					<div id="sb-inner-header">
						<div
							onClick={(e) => menuBtnClickEvent(e.target as any)}
							id="menu-btn"
						></div>
						<div className="logo-box">
							<img className="logo" src={require("img/logo.png")} alt="" />
							<h2>Dimitube</h2>
						</div>
					</div>
				</div>
				<div id="sb-body">
					<ul>
						<li>
							<div className="sb-link">
								<img src={require("img/home.png")} alt=""></img>
								<span>HOME</span>
							</div>
							<div className={`subtitle ${isOpen === true ? "active" : ""}`}>
								홈
							</div>
						</li>
						<li>
							<div className="sb-link">
								<img src={require("img/explore.png")} alt=""></img>
								<span>EXPLORER</span>
							</div>
							<div className={`subtitle ${isOpen === true ? "active" : ""}`}>
								탐색
							</div>
						</li>
						<li>
							<div className="sb-link">
								<img src={require("img/history.png")} alt=""></img>
								<span>HISTORY</span>
							</div>
							<div className={`subtitle ${isOpen === true ? "active" : ""}`}>
								기록
							</div>
						</li>
						<li>
							<div className="sb-link">
								<img src={require("img/subscribe.png")} alt=""></img>
								<span>SUBSCRIBE</span>
							</div>
							<div className={`subtitle ${isOpen === true ? "active" : ""}`}>
								구독
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div
				className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
				onClick={toggleSidebar}
			></div>
		</div>
	);
}

export default Sidebar;
