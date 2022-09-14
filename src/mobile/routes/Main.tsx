import "@mobile/css/contents-container.scoped.scss";
import Header from "@mobile/component/header/Header";
import Video from "@mobile/component/Video";
import { useEffect, useState } from "react";

interface videosProps {
	idx: number;
}

function MobileMain() {
	const [loading, setLoading] = useState<boolean>(true);
	const [videos, setVideos] = useState<videosProps[]>([]);
	useEffect(() => {
		const isLoading = async () => {
			try {
				for (let i = 0; i < 10; i++) {
					setVideos((objProps) => [...objProps, { idx: i }]);
				}
			} catch {
				console.log("videos loading error");
			}
			setLoading(false);
		};
		isLoading();
	}, []);

	return (
		<div>
			<Header />
			<div className="contents-container">
				{loading ? <div>Loading</div> : null}
				{videos.map((item: any, idx: number) => {
					return <Video key={idx} idx={item.idx} />;
				})}
			</div>
		</div>
	);
}

export default MobileMain;
