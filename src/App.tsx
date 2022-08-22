import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import PcNotFound from "@pc/routes/NotFound";
import PcMain from "@pc/routes/Main";
import PcSignIn from "@pc/routes/SignIn";
import PcSetting from "@pc/routes/Setting";
import PcChannel from "@pc/routes/Channel";
import PcSearch from "@pc/routes/Search";
import MobileMain from "@mobile/routes/Main";
import MobileNotFound from "@mobile/routes/NotFound";

function App() {
	return (
		<div>
			<BrowserView>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PcMain />} />
						<Route path="/setting" element={<PcSetting />} />
						<Route path="/signin" element={<PcSignIn />} />
						<Route path="/channel" element={<PcChannel />} />
						<Route path="/search" element={<PcSearch />} />
						<Route path="*" element={<PcNotFound />} />
					</Routes>
				</BrowserRouter>
			</BrowserView>
			<MobileView>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MobileMain />} />
						{/* <Route path="/setting" element={<PcSetting />} />
						<Route path="/signin" element={<PcSignIn />} />
						<Route path="/channel" element={<PcChannel />} />
						<Route path="/search" element={<PcSearch />} /> */}
						<Route path="*" element={<MobileNotFound />} />
					</Routes>
				</BrowserRouter>
			</MobileView>
		</div>
	);
}

export default App;
