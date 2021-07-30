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
							automation's, robotics, creating electrical constructions
							and installing security systems.
						</p>
						<p>
							Our goal is to make people’s life easier by making some
							ordinary everyday tasks less time consuming with our
							devices.
						</p>
					</div>
				</div>
			</Fade>

			<div className={classes["work-bottom-wrap"]}>
				<Fade bottom>
					<div className={classes["work-bottom-content"]}>
						<div className={classes["image-warper"]}>
							<LazyLoadImage
								effect='blur'
								placeholderSrc='https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg'
								className='product__image'
								src='/images/facetwo.png'
								alt='demo image'
								// height={190}
								// weight={190}
								objectFit='contain'
							/>
							{/* <img src='/images/facetwo.png' alt='features Image' /> */}
						</div>

						<h3>Ai People Count</h3>
						<p>
							AGEO 19 recognises all people entering a space as well as
							those leaving. This is even possible if the place has a
							different entrance point and leaving point. This is
							achieved through sensors that our team places and regulates
							in order not to need human intervention again.
						</p>
					</div>
					<div className={classes["work-bottom-content"]}>
						<div className={classes["image-warper-modifier"]}>
							<div className={classes["image-warper"]}>
								<LazyLoadImage
									effect='blur'
									placeholderSrc='https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg'
									className='product__image'
									src='/images/sensor.png'
									alt='demo image'
									// height={190}
									// weight={190}
									objectFit='contain'
								/>
								{/* <img src='/images/sensor.png' alt='features Image' /> */}
							</div>

							<div>
								<h3>Ai Occupancy Monitor</h3>
								<p>
									After the AGEO19 is set up you need to set just a
									number which will indicate the number of people
									allowed to be inside the building-place and that's
									all.
								</p>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default memo(Work);
