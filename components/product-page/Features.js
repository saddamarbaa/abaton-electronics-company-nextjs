/** @format */

import React, { memo } from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import {
	setShowGreeceLanguageState,
	setShowEnglishLanguageState,
	selectLanguage,
} from "../../features/language/languageSlice";

import classes from "./Features.module.css";
import CheckIcon from "@material-ui/icons/Check";

const Features = () => {
	const dispatch = useDispatch();
	const englishLanguage = useSelector(selectLanguage);

	return (
		<section id='feature' className={classes.feature}>
			<div className={classes["feature-top-wrap"]}>
				<Fade bottom>
					<div className={classes["top-content"]}>
						{englishLanguage && (
							<>
								<h3>Making it easy for you</h3>
								<p>
									The recognition feature allows AGEO 19 to handle the
									traffic and informs us every time someone comes or
									goes.
								</p>
							</>
						)}

						{!englishLanguage && (
							<>
								<h3>Κάνοντας το εύκολο για εσένα</h3>
								<p>
									Το σύστημα αναγνώρισης επιτρέπει στο AGEO 19 να
									διαχειριστεί την κίνηση διερχόμενων-εξερχόμενων και
									να μας ενημερώνει κάθε φορα που κάποιος έρχεται ή
									φεύγει.
								</p>
							</>
						)}

						<p>
							<CheckIcon
								style={{
									color: "#72A1D5",
									marginRight: "10px",
									fontSize: "2rem",
								}}
							/>

							{englishLanguage && (
								<span>
									Use AGEO 19 as a counter in the doors of your store
									which will indicate the number of people who can
									enter. A big STOP indication will stop people from
									entering the building when the max number of people
									is already inside.
								</span>
							)}

							{!englishLanguage && (
								<span>
									Χρησιμοποίησε το AGEO 19 ως μετρητή στις πόρτες του
									καταστήματός σου, ο οποίος θα υποδεικνύει τον αριθμό
									των ανθρώπων που επιτρέπεται να ησέλθουν. Μιά μεγάλη
									ΣΤΟΠ ένδειξη θα αποτρέπει να εισέρχονται άνθρωποι
									στον χώρο όταν ο μέγιστος αριθμός ατόμων βρίσκεται
									ήδη στο εσωτερικό του καταστήματος.
								</span>
							)}
						</p>

						<p>
							<CheckIcon
								style={{
									color: "#72A1D5",
									marginRight: "10px",
									fontSize: "2rem",
								}}
							/>

							{englishLanguage && (
								<span>
									AGEO 19 to inform ONLY YOU when there is no more
									available space inside the building. The sensor is
									going to handle the traffic and you are going to be
									informed only when there is no space for more people.
									This can be done with custom ways we can build for
									you.
								</span>
							)}

							{!englishLanguage && (
								<span>
									Χρησιμοποίησε το AGEO 19 για να ενημερωθείς ΜΟΝΟ ΕΣΥ
									για όταν δεν υπάρχει διαθέσιμος χώρος στο κτήριο. Οι
									αισθητήρες θα διαχειρίζονται την κίνηση και εσύ θα
									ενημερώνεσαι μόνο οταν δεν υπάρχει διαθέσιμος χώρος
									για άλλα άτομα. Αυτό μπορεί να επιτευχθεί με
									διάφορους προσαρμοσμένους τρόπους που μπορούμε να
									φτιάξουμε για εσένα.
								</span>
							)}
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

						<div
							className={classes["drop-back-shadow-second"]}
							id={
								englishLanguage
									? classes["drop-back-shadow-second"]
									: ""
							}></div>
					</div>
				</Fade>
			</div>

			<Fade bottom>
				<div className={classes["feature-bottom-wrap"]}>
					{englishLanguage && <h2>Start now in just three steps</h2>}
					{!englishLanguage && (
						<h2>Ξεκίνησε τώρα με μόνο 3 απλά βήματα</h2>
					)}
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
							{!englishLanguage && (
								<div className={classes["bottom-content-text"]}>
									<h3>Τοποθέτησέ το</h3>
									<div>
										<span>1</span>
										<p>
											Εισάγουμε στον μετρητή τον μέγιστο αριθμό
											ανθρώπων που επιτρέπονται στον χώρο.
										</p>
									</div>

									<h3>Ξεκινά το μέτρημα</h3>
									<div>
										<span>2</span>
										<p>
											Κάθε φορά που κάποιος εισέρχεται στον χώρο, ο
											αριθμός αυτόματα μειώνεται και το αντίθετο οταν
											κάποιος εξέρχεται.
										</p>
									</div>

									<h3>ΣΤΟΠ ένδειξη</h3>
									<div>
										<span>3</span>
										<p>
											Ο φωτεινός σηματοδότης γίνεται κόκκινος οταν ο
											μετρητής μηδενίσει.
										</p>
									</div>
								</div>
							)}

							{englishLanguage && (
								<div className={classes["bottom-content-text"]}>
									<h3>Mount it</h3>
									<div>
										<span>1</span>
										<p>
											We enter on the meter the number of people
											allowed in the space (using the circle buttons)
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
							)}
						</div>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default memo(Features);
