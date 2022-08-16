import "css/Sidebar.css";

type SidebarProps = {
	isOpen: boolean;
	isClose: boolean;
	toggleSidebar: any;
};

function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
	return (
		<div>
			<div className={`sidebar ${isOpen === true ? "active" : ""}`}>
				<div id="sb-body">
					<ul>
						<li>
							<div className="sb-link">
								<img src={require("img/home.png")} alt=""></img>
								<span>HOME</span>
							</div>
						</li>
						<li>
							<div className="sb-link">
								<img src={require("img/explore.png")} alt=""></img>
								<span>EXPLORER</span>
							</div>
						</li>
						<li>
							<div className="sb-link">
								<img src={require("img/history.png")} alt=""></img>
								<span>HISTORY</span>
							</div>
						</li>
						<li>
							<div className="sb-link">
								<img src={require("img/subscribe.png")} alt=""></img>
								<span>SUBSCRIBE</span>
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
