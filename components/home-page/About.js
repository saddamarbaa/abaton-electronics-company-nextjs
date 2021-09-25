/** @format */

import React, { memo } from "react";
import classes from "./About.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

const About = () => {
	return (
		<section id='about' className={classes.about}>
			<div
				className={classes.image}
				style={{
					position: "relative",
				}}>
				<div className={classes["absolute-content"]}>
					<h1>
						People Count and <br></br>occupancy solutions
					</h1>

					<div className={classes["svgImage"]}>
						<Image
							alt='svg logo'
							src='/images/Group 2.svg'
							objectFit='contain'
							width={465}
							height={36}
							style={{ display: "block" }}
							className={classes.svgImage}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default memo(About);
