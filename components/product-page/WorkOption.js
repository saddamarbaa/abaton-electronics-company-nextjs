/** @format */

import React, { memo } from "react";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { useDispatch, useSelector } from "react-redux";
import {
	setShowGreeceLanguageState,
	setShowEnglishLanguageState,
	selectLanguage,
} from "../../features/language/languageSlice";

import classes from "./WorkOption.module.css";

const WorkOption = () => {
	const dispatch = useDispatch();
	const englishLanguage = useSelector(selectLanguage);

	return (
		<section id='work' className={classes.work}>
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

						{englishLanguage && (
							<>
								<h3>Ai People Count</h3>
								<p>
									AGEO 19 recognises all people entering a space as
									well as those leaving. This is even possible if the
									place has a different entrance point and leaving
									point. This is achieved through sensors that our team
									places and regulates in order not to need human
									intervention again.
								</p>
							</>
						)}

						{!englishLanguage && (
							<>
								<h3>ΑΙ Μετρητής Ανθρώπων</h3>
								<p>
									Το ΑGEO 19 αναγνωρίζει όλους τους ανθρώπους που
									εισέρχονται σε έναν χώρο καθώς και αυτούς που
									φεύγουν. Αυτό είναι εφικτό ακόμα και αν ο χώρος έχει
									διφορετική είσοδο και έξοδο. Οι λειτουργίες αυτές
									επιτυγχάνονται μέσω των αισθητήρων τους οποίους οι
									ομάδα μας τοποθετέι και ρυθμίζει έτσι ώστε να μην
									χρείαστεί ξανά ανθρώπινη παρέμβαση.
								</p>
							</>
						)}
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

							{englishLanguage && (
								<div>
									<h3>Ai Occupancy Monitor</h3>
									<p>
										After the AGEO19 is set up you need to set just a
										number which will indicate the number of people
										allowed to be inside the building-place and
										that`&apos;s all.
									</p>
								</div>
							)}

							{!englishLanguage && (
								<div>
									<h3>ΑΙ Οθόνη Πληρότητας</h3>
									<p>
										Αφού το AGEO 19 είναι έτοιμο για χρήση, εισάγεις
										τον αριθμό των ανθρώπων που επιτρέπεται να
										βρίσκονται εντός του κτηρίου και αυτό ήταν.
									</p>
								</div>
							)}
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default memo(WorkOption);
