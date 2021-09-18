/** @format */

import { useEffect, useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import classes from "./scrollToTop.module.css";

const ScrollToTopComponent = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);
	}, []);

	return (
		<div
			className={classes.scrollToTopButton}
			style={{ display: visible ? "flex" : "none" }}>
			<ExpandLessIcon onClick={scrollToTop} className={classes.icon} />
		</div>
	);
};

export default ScrollToTopComponent;
