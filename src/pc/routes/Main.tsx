import Header from "@pc/component/Header";
import "@pc/css/contents-container.scoped.scss";

function PcMain() {
	return (
		<div>
			<Header />
			<div id="pc-contents-container">
				<h1>PcMain Page</h1>
			</div>
		</div>
	);
}

export default PcMain;
