/** @format */

import React, { memo } from "react";
import classes from "./About.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
	return (
		<section id='about' className={classes.about}>
			<div className={classes.image}>
				<img
					loading='lazy'
					src='/images/woman-entering-furniture-store-1600x900.png'
					alt='image'
				/>
				<div className={classes["absolute-content"]}>
					<h1>
						People Count and <br></br>occupancy solutions
					</h1>
					<img
						src='/images/Group 2.svg'
						alt='image'
						className={classes.svgImage}
					/>
				</div>
			</div>

			<div className={classes.trustedBy}>
				<h1>Trusteed by</h1>

				<div className={classes["trusted-company"]}>
					<div className={classes.icon}>
						<ArrowBackIosIcon />
					</div>
					<div className={classes["trusted-company-inner"]}>
						<img src='/images/Bitcoinlogo.svg' alt='image' />
						<img src='/images/googleLogo.png' alt='image' />
					</div>

					<div className={classes.icon}>
						<ArrowForwardIosIcon />
					</div>
				</div>
			</div>
			<div className={classes["drop-back-shadow"]}></div>
		</section>
	);
};

export default memo(About);
