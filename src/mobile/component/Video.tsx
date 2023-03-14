import "@mobile/css/video.scoped.scss";
import profile from "@img/pop-cat.gif";
import tmp_thumnail from "@img/temp_thumnail.png";
import { Link } from "react-router-dom";

interface videoProps {
	idx: number;
}

function Video({ idx }: videoProps) {
	const styles = {
		thumnail: {
			backgroundImage: `url(${tmp_thumnail})`,
		},
		profile: {
			backgroundImage: `url(${profile})`,
		},
	};
	return (
		<div className="video-component-container">
			<Link to="/watch">
				<div className="thumbnail_hyperLink">
					<div style={styles.thumnail} className="thumbnail"></div>
				</div>
			</Link>
			<div className="video-information">
				<div className="video-profile-container">
					<Link to="/channel">
						<div style={styles.profile} className="video-profile"></div>
					</Link>
				</div>
				<div className="video-texts">
					<Link to="/watch">
						<h3 className="video-title">
							<div>{idx}</div>
						</h3>
						{/* <div>description</div> */}
						<div className="video-views">조회수 14만회</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Video;
