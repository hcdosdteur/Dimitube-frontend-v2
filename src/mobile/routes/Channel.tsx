import Header from "@mobile/component/Header";
import "@mobile/css/contents-container.scoped.scss";
import "@mobile/css/channel.scoped.scss";

function Channel() {
	return (
		<div>
			<Header />
			<div id="contents-container">
				<div>
					<div></div>
					<div>
						<ul>
							<li>1</li>
							<li>2</li>
						</ul>
					</div>
				</div>
				<div id="component-container">
					<ul>
						<li>
							<div className="channel-component">component 1</div>
						</li>
						<li>
							<div className="channel-component">component 2</div>
						</li>
						<li>
							<div className="channel-component">component 3</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Channel;
