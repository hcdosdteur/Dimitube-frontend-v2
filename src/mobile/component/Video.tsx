import "@mobile/css/video.scss";
import profile from "@img/pop-cat.gif";
import tmp_thumnail from "@img/temp_thumnail.png";

function Video() {
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
			<div className="thumbnail_hyperLink">
				<a href="">
					<div style={styles.thumnail} className="thumbnail"></div>
				</a>
			</div>
			<div className="video-information">
				<div className="video-profile-container">
					<div style={styles.profile} className="video-profile"></div>
				</div>
				<div className="video-texts">
					<h3 className="video-title">
						<div>video title</div>
					</h3>
					{/* <div>description</div> */}
					<div className="video-views">조회수 14만회</div>
				</div>
			</div>
		</div>
	);
}

export default Video;
