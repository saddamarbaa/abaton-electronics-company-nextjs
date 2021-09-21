/** @format */

import React, { memo, useRef } from "react";
import Fade from "react-reveal/Fade";

import { useDispatch, useSelector } from "react-redux";
import {
	setShowGreeceLanguageState,
	setShowEnglishLanguageState,
	selectLanguage,
} from "../../features/language/languageSlice";

import classes from "./Contact.module.css";

const Contact = () => {
	const dispatch = useDispatch();
	const englishLanguage = useSelector(selectLanguage);

	const firstNameReference = useRef();
	const lastNameReference = useRef(null);
	const phoneNumberReference = useRef(null);
	const emailReference = useRef(null);
	const companyNameReference = useRef(null);
	const textReference = useRef(null);

	const submitFormHandler = (event) => {
		event.preventDefault();
		const enteredFirstName = firstNameReference.current.value;
		const enteredLastName = lastNameReference.current.value;
		const enteredPhoneNumber = phoneNumberReference.current.value;
		const enteredEmail = emailReference.current.value;
		const enteredCompanyName = companyNameReference.current.value;
		const enteredText = textReference.current.value;

		console.log(
			"enteredFirstName ",
			enteredFirstName,
			"enteredLastName ",
			enteredLastName,
			" enteredPhoneNumber ",
			enteredPhoneNumber,
			" enteredEmail ",
			enteredEmail,
			" enteredCompanyName ",
			enteredCompanyName,
			" enteredText ",
			enteredText,
		);

		firstNameReference.current.value = "";
		lastNameReference.current.value = "";
		phoneNumberReference.current.value = "";
		emailReference.current.value = "";
		companyNameReference.current.value = "";
		textReference.current.value = "";
	};

	return (
		<>
			{englishLanguage && (
				<section className={classes.contact} id='contact'>
					<div className={classes["content-wrapper"]}>
						<h1>Get In Touch</h1>
						<p>
							Whether you&apos;re interested in pricing, a 30 day trial,
							or a demo of the dashboard, we&apos;d be delighted to open
							a dialogue.
						</p>
						<p>
							Complete the form below and we&apos;ll be in touch as soon
							as we can.
						</p>

						<div className={classes["form-wrapper"]}>
							<form onSubmit={submitFormHandler}>
								<div className={classes["namesContent"]}>
									<label htmlFor='firstName'> </label>
									<input
										ref={firstNameReference}
										style={{ marginRight: "1rem" }}
										placeholder='First Name:'
										type='text'
										id='firstName'
										name='firstName'
										autoComplete='firstName'
										minLength='2'
										required
										className={classes.input}
									/>

									<label htmlFor='lastName'> </label>
									<input
										ref={lastNameReference}
										className={classes.input}
										placeholder='Last Name:'
										type='text'
										id='lastName'
										name='lastName'
										autoComplete='lastName'
										minLength='2'
										required
									/>
								</div>
								<label htmlFor='companyName'> </label>
								<input
									ref={companyNameReference}
									placeholder='Company name:'
									className={classes.input}
									type='text'
									id='companyName'
									name='companyName'
									autoComplete='companyName'
									minLength='2'
									required
								/>

								<label htmlFor='number'> </label>
								<input
									placeholder='Phone number'
									ref={phoneNumberReference}
									className={classes.input}
									type='number'
									id='number'
									name='number'
									autoComplete='number'
									required
								/>

								<label htmlFor='email'> </label>
								<input
									placeholder='Email address'
									ref={emailReference}
									type='email'
									id='email'
									name='email'
									maxLength='20'
									minLength='8'
									autoComplete='email'
									required
									className={classes.input}
								/>

								<textarea
									maxLength='500'
									minLength='10'
									ref={textReference}
									rows='4'
									cols='50'
									name='comment'
									required></textarea>

								<button
									className={classes.button}
									type='submit'
									name='submit'
									id='submit-form'>
									Submit
								</button>
							</form>
						</div>
					</div>
				</section>
			)}

			{/* Greece */}
			{!englishLanguage && (
				<section className={classes.contact} id='contact'>
					<div className={classes["content-wrapper"]}>
						<h1>Επικοινωνήστε Μαζί Μας </h1>
						<p>
							Εάν ενδιαφέρεστε για την τιμή κάποιου προϊόντος ή θα θέλατε
							μια δοκιμή 30 ημερών, θα είμασταν χαρούμενοι να έρθουμε σε
							επικοινωνία μαζί σας.
						</p>
						<p>
							Συμπληρώστε την παρακάτω φόρμα και θα έρθουμε σε επαφή μαζί
							σας το συντομότερο δυνατό.
						</p>

						<div className={classes["form-wrapper"]}>
							<form onSubmit={submitFormHandler}>
								<div className={classes["namesContent"]}>
									<label htmlFor='firstName'> </label>
									<input
										ref={firstNameReference}
										style={{ marginRight: "1rem" }}
										placeholder='First Name:'
										type='text'
										id='firstName'
										name='firstName'
										autoComplete='firstName'
										minLength='2'
										required
										className={classes.input}
									/>

									<label htmlFor='lastName'> </label>
									<input
										ref={lastNameReference}
										className={classes.input}
										placeholder='Last Name:'
										type='text'
										id='lastName'
										name='lastName'
										autoComplete='lastName'
										minLength='2'
										required
									/>
								</div>
								<label htmlFor='companyName'> </label>
								<input
									ref={companyNameReference}
									placeholder='Company name:'
									className={classes.input}
									type='text'
									id='companyName'
									name='companyName'
									autoComplete='companyName'
									minLength='2'
									required
								/>

								<label htmlFor='number'> </label>
								<input
									placeholder='Phone number'
									ref={phoneNumberReference}
									className={classes.input}
									type='number'
									id='number'
									name='number'
									autoComplete='number'
									required
								/>

								<label htmlFor='email'> </label>
								<input
									placeholder='Email address'
									ref={emailReference}
									type='email'
									id='email'
									name='email'
									maxLength='20'
									minLength='8'
									autoComplete='email'
									required
									className={classes.input}
								/>

								<textarea
									maxLength='500'
									minLength='10'
									ref={textReference}
									rows='4'
									cols='50'
									name='comment'
									required></textarea>

								<button
									className={classes.button}
									type='submit'
									name='submit'
									id='submit-form'>
									Υποβολή
								</button>
							</form>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default memo(Contact);
