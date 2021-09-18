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
				<Image
					src='/images/woman-entering-furniture-store-1600x900.png'
					alt='About Image'
					layout='fill'
					objectFit='cover'
				/>

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

			<div className={classes.trustedBy}>
				<h1>Trusteed by</h1>

				<div className={classes["trusted-company"]}>
					<div className={classes.icon}>
						<ArrowBackIosIcon />
					</div>
					<div className={classes["trusted-company-inner"]}>
						<Image
							src='/images/Bitcoinlogo.svg'
							alt='biton logo'
							objectFit='contain'
							width={158}
							height={46}
						/>

						<Image
							src='/images/googleLogo.png'
							alt='google logo'
							objectFit='contain'
							width={146}
							height={50}
						/>
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
