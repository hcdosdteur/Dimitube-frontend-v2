import Header from "@mobile/component/header/Header";
import "@mobile/css/contents-container.scoped.scss";
import "@mobile/css/channel.scoped.scss";
import profile from "@img/pop-cat.gif";
import { RefObject, useEffect, useRef, useState } from "react";

function Channel() {
	const [tabNum, setTabNum] = useState<number>(1);
	const tabUListElement = useRef() as RefObject<HTMLUListElement>;
	const tabContent1 = useRef() as RefObject<HTMLDivElement>;
	const tabContent2 = useRef() as RefObject<HTMLDivElement>;
	const tabContent3 = useRef() as RefObject<HTMLDivElement>;
	const style = {
		tabs: {
			transform: "translateX(0px)",
		},
	};

	let isScrolling: boolean = false;
	let fstScrolledLocation: number = 0;
	let clientX_start: number = 0;
	let clientX_end: number = 0;
	let clientX_move: number = 0;

	const touchstart = (e: TouchEvent) => {
		const element: HTMLUListElement | null = tabUListElement.current;
		clientX_start = e.touches[0].clientX;
		if (element) {
			const transform: number = parseInt(
				element.style.transform.split("(")[1].split("p")[0]
			);
			fstScrolledLocation = transform;
		}
	};

	const touchmove = (e: TouchEvent) => {
		const element: HTMLUListElement | null = tabUListElement.current;
		clientX_move = e.changedTouches[0].clientX;
		const gap: number = clientX_move - clientX_start;
		if (element) {
			if (isScrolling)
				element.style.transform = `translateX(${fstScrolledLocation}px)`;
			else
				element.style.transform = `translateX(${fstScrolledLocation + gap}px)`;
		}
	};

	const touchend = (e: TouchEvent) => {
		if (e.cancelable) e.preventDefault();
		const element: HTMLUListElement | null = tabUListElement.current;
		if (element) {
			const transform: number = parseInt(
				element.style.transform.split("(")[1].split("p")[0]
			);
			element.classList.add("active");
			if (transform >= -180) {
				changeTab(1);
			} else if (transform < -180 && transform >= -540) {
				changeTab(2);
			} else if (transform < -540) {
				changeTab(3);
			}
			setTimeout(() => {
				element.classList.remove("active");
			}, 200);
			isScrolling = false;
		}
	};

	const changeTab = (n: number) => {
		const element = tabUListElement.current;
		if (element) {
			if (n === 1) {
				element.style.transform = `translateX(0px)`;
				setTabNum(1);
			} else if (n === 2) {
				element.style.transform = `translateX(-360px)`;
				setTabNum(2);
			} else if (n === 3) {
				element.style.transform = `translateX(-720px)`;
				setTabNum(3);
			}
		}
	};
	let nowScrolling: NodeJS.Timeout = setTimeout(() => {}, 0);
	const scrollTab = (e: Event) => {
		isScrolling = true;
	};

	useEffect(() => {
		const element: HTMLUListElement | null = tabUListElement.current;
		const tabContent1Element: HTMLDivElement | null = tabContent1.current;
		const tabContent2Element: HTMLDivElement | null = tabContent2.current;
		const tabContent3Element: HTMLDivElement | null = tabContent3.current;

		element?.addEventListener("touchstart", (e) => touchstart(e));
		element?.addEventListener("touchend", (e) => touchend(e));
		element?.addEventListener("touchmove", (e) => touchmove(e));

		tabContent1Element?.addEventListener("scroll", (e) => scrollTab(e));
		tabContent2Element?.addEventListener("scroll", (e) => scrollTab(e));
		tabContent3Element?.addEventListener("scroll", (e) => scrollTab(e));

		return () => {
			tabContent1Element?.removeEventListener("scroll", (e) => scrollTab(e));
			tabContent2Element?.removeEventListener("scroll", (e) => scrollTab(e));
			tabContent3Element?.removeEventListener("scroll", (e) => scrollTab(e));
		};
	}, []);

	return (
		<div>
			<Header />
			<div className="contents-container">
				<div>
					<div id="user-info">
						<div id="user-profile">
							<img src={profile} alt="" />
						</div>
						<div id="user-info-inner">
							<div id="user-id">HCDOSDTEUR</div>
							<div id="user-message">@message</div>
						</div>
					</div>
					<div id="tab-menu">
						<ul>
							<li
								className={`${tabNum === 1 ? "pick" : ""}`}
								onClick={() => changeTab(1)}
							>
								홈
							</li>
							<li
								className={`${tabNum === 2 ? "pick" : ""}`}
								onClick={() => changeTab(2)}
							>
								동영상
							</li>
							<li
								className={`${tabNum === 3 ? "pick" : ""}`}
								onClick={() => changeTab(3)}
							>
								정보
							</li>
						</ul>
					</div>
				</div>
				<div id="tab-container">
					<ul ref={tabUListElement} style={style.tabs}>
						<li>
							<div className="tab-contents" ref={tabContent1}>
								<div>tab1</div>
								<div>tab1</div>
								<div>tab1</div>
								<div>tab1</div>
								<div>tab1</div>
								<div>tab1</div>
							</div>
						</li>
						<li>
							<div className="tab-contents" ref={tabContent2}>
								<div>tab2</div>
							</div>
						</li>
						<li>
							<div className="tab-contents" ref={tabContent3}>
								<div>tab3</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Channel;
