/** @format */

import React, { memo } from "react";
import classes from "./Footer.module.css";
import Fade from "react-reveal/Fade";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useState } from "react";

const Footer = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 400) {
			setVisible(true);
		} else if (scrolled <= 400) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		// window.scrollTo({
		// 	top: 0,
		// 	behavior: "smooth",
		// });
	};

	// window.addEventListener("scroll", toggleVisible);

	return (
		<div className={classes.footer}>
			<div className={classes["footer-head"]}>
				<div className={classes.logo}>
					<img src='/images/logo.png' alt='' />
				</div>

				<nav className={classes.nav}>
					<a href='#about'> About us</a>
					<a href='#feature'> Feature</a>
					<a href='#work'>How it works</a>
					<a href='#contact'>Contact</a>
				</nav>

				<div className={classes.contacts}>
					<p className={classes["hide-ms"]}>
						<span>Contact</span>
					</p>
					<p>
						<span>fax: </span> 2410624625
					</p>
					<p>
						<span>mobile: </span> 698325636
					</p>
					<p>
						<span>Email: </span>info@abatonelectronic.gr
					</p>
					<p>
						<span>Address: </span> Cairo 25.41335 Larissa
					</p>
				</div>
				<div className={classes["social-media"]}>
					<p>Social Media</p>
					<FacebookIcon className={classes.icon} />
					<InstagramIcon className={classes.icon} />
					<TwitterIcon className={classes.icon} />
					<MailOutlineIcon className={classes.icon} />
					<LinkedInIcon className={classes.icon} />
					{/* <FilterVintageIcon className={classes.icon} /> */}
				</div>
			</div>

			<div className={classes["footer-bottom"]}>
				<div></div>
				<Fade right big>
					<p>&copy; 2011 Abaton Electronics | Power By: PHONEIX</p>
				</Fade>
			</div>

			<div
				className={classes.scrollToTop}
				style={{ display: visible ? "flex" : "none" }}>
				<ExpandLessIcon onClick={scrollToTop} className={classes.icon} />
			</div>
		</div>
	);
};

export default memo(Footer);
