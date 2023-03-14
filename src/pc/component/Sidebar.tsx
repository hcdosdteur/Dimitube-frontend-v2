import "@pc/css/Sidebar.scoped.scss";
import home from "@img/home.png";
import logo from "@img/logo.png";
import explore from "@img/explore.png";
import history from "@img/history.png";
import subscribe from "@img/subscribe.png";
import "@pc/css/Header.scoped.scss";

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
							<img className="logo" src={logo} alt="" />
							<h2>DimiTube</h2>
						</div>
					</div>
				</div>
				<div id="sb-body">
					<ul>
						<li>
							<div className="sb-link">
								<img src={home} alt=""></img>
								<span>HOME</span>
							</div>
							<div className={`subtitle ${isOpen === true ? "active" : ""}`}>
								홈
							</div>
						</li>
						<li>
							<div className="sb-link">
								<img src={explore} alt=""></img>
								<span>EXPLORER</span>
							</div>
							<div className={`subtitle ${isOpen === true ? "active" : ""}`}>
								탐색
							</div>
						</li>
						<li>
							<div className="sb-link">
								<img src={history} alt=""></img>
								<span>HISTORY</span>
							</div>
							<div className={`subtitle ${isOpen === true ? "active" : ""}`}>
								기록
							</div>
						</li>
						<li>
							<div className="sb-link">
								<img src={subscribe} alt=""></img>
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
