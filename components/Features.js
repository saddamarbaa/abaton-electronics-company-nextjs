/** @format */

import React, { memo } from "react";
import classes from "./Features.module.css";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import CheckIcon from "@material-ui/icons/Check";

const Features = () => {
	return (
		<section id='feature' className={classes.feature}>
			<div className={classes["feature-top-wrap"]}>
				<Fade bottom>
					<div className={classes["top-content"]}>
						<h3>Making it easy for you</h3>
						<p>
							The recognition feature allows AGEO 19 to handle the
							traffic and informs us every time someone comes or goes.
						</p>

						<p>
							<CheckIcon
								style={{
									color: "#72A1D5",
									marginRight: "10px",
									fontSize: "2rem",
								}}
							/>
							<span>
								Use AGEO 19 as a counter in the doors of your store
								which will indicate the number of people who can enter.
								A big STOP indication will stop people from entering the
								building when the max number of people is already
								inside.
							</span>
						</p>

						<p>
							<CheckIcon
								style={{
									color: "#72A1D5",
									marginRight: "10px",
									fontSize: "2rem",
								}}
							/>
							<span>
								AGEO 19 to inform ONLY YOU when there is no more
								available space inside the building. The sensor is going
								to handle the traffic and you are going to be informed
								only when there is no space for more people. This can be
								done with custom ways we can build for you.
							</span>
						</p>
					</div>

					<div
						className={classes["top-img"]}
						style={{
							position: "relative",
						}}>
						<Image
							src='/images/restaurant.png'
							alt='features Image'
							layout='fill'
							objectFit='cover'
						/>

						<div className={classes["drop-back-shadow-second"]}></div>
					</div>
				</Fade>
			</div>

			<Fade bottom>
				<div className={classes["feature-bottom-wrap"]}>
					<h2>Start now in just three steps</h2>
					<div className={classes["bottom-content-wrap"]}>
						<div className={classes.image}>
							<Image
								src='/images/feet.png'
								alt='features Image'
								width={375}
								height={480}
								layout='responsive'
							/>
						</div>
						<div className={classes["bottom-content"]}>
							<div className={classes["bottom-content-text"]}>
								<h3>MOUNT IT.</h3>
								<div>
									<span>1</span>
									<p>
										We enter on the meter the number of people allowed
										in the space (using the circle buttons)
									</p>
								</div>

								<h3>Starts counting</h3>
								<div>
									<span>2</span>
									<p>
										Each time someone enters the space, the number
										automatically decreases (vice versa).
									</p>
								</div>

								<h3>Meter resets automatically</h3>
								<div>
									<span>3</span>
									<p>
										The light lights up red as soon as the meter is
										reset
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default memo(Features);
