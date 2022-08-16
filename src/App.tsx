import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import NotFound from "routes/NotFound";
import Main from "routes/Main";
import SignIn from "routes/SignIn";
import Setting from "routes/Setting";
import Channel from "routes/Channel";
import Search from "routes/Search";

function App() {
	return (
		<div>
			<BrowserView>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/setting" element={<Setting />} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="/channel" element={<Channel />} />
						<Route path="/search" element={<Search />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</BrowserView>
			<MobileView>
				<h1>모바일 버전 개발중...</h1>
			</MobileView>
		</div>
	);
}

export default App;
