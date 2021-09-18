/** @format */

import React, { memo } from "react";
import classes from "./Work.module.css";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Work = () => {
	return (
		<section id='work' className={classes.work}>
			<Fade bottom>
				<div className={classes.head}>
					<div className={classes.image}>
						<LazyLoadImage
							effect='blur'
							placeholderSrc='https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg'
							className='product__image'
							src='/images/anton.png'
							alt='demo image'
							// height={190}
							// weight={190}
							objectFit='contain'
						/>

						{/* <img src='/images/anton.png' alt='features Image' /> */}
					</div>

					<div className={classes.content}>
						<h2>Who we are</h2>
						<p>
							We are Abaton Electronics, a company specializing in
							automation`&apos;s, robotics, creating electrical
							constructions and installing security systems.
						</p>
						<p>
							Our goal is to make people’s life easier by making some
							ordinary everyday tasks less time consuming with our
							devices.
						</p>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default memo(Work);
