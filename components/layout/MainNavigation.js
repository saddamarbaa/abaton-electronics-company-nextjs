/** @format */

import { memo, React, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import {
	setShowGreeceLanguageState,
	setShowEnglishLanguageState,
	selectLanguage,
} from "../../features/language/languageSlice";

import SideBar from "./sideBar";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const [burgerMenuStatus, SetBurgerMenuStatus] = useState(false);
	const dispatch = useDispatch();
	const englishLanguage = useSelector(selectLanguage);

	const router = useRouter();

	const showEnglishLanguage = () => {
		dispatch(setShowEnglishLanguageState());
	};

	const showGreeceLanguage = () => {
		dispatch(setShowGreeceLanguageState());
	};

	return (
		<>
			{englishLanguage && (
				<header className={classes.header}>
					<SideBar
						burgerMenuStatus={burgerMenuStatus}
						SetBurgerMenuStatus={SetBurgerMenuStatus}
						showGreeceLanguage={showGreeceLanguage}
						showEnglishLanguage={showEnglishLanguage}
						englishLanguage={englishLanguage}
					/>
					<div className={classes.container}>
						<div
							className={classes.logo}
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Link href='/'>
								<a>
									<Image
										className='logo-img'
										src='/images/mainlogo.png'
										alt='LOGO'
										layout='fill'
										objectFit='contain'
									/>
								</a>
							</Link>
						</div>
						<nav className={`${classes.nav} ${classes.showNav}`}>
							<ul>
								<li>
									<Link href='/'>
										<a
											id={
												router.pathname == "/" ? classes.active : ""
											}>
											Home
										</a>
									</Link>
								</li>

								<li>
									<Link href='/about-us'>
										<a
											className={classes.worklink}
											id={
												router.pathname == "/about-us"
													? classes.active
													: ""
											}>
											About us
										</a>
									</Link>
								</li>
								<li>
									<Link href='/product'>
										<a
											className={classes.worklink}
											id={
												router.pathname == "/product"
													? classes.active
													: ""
											}>
											Products
										</a>
									</Link>
								</li>

								<li>
									<Link href='/contact'>
										<a
											className={classes.contact}
											id={
												router.pathname == "/contact"
													? classes.active
													: ""
											}>
											Contact
										</a>
									</Link>
								</li>

								<li className='select'>
									<select required onChange={showGreeceLanguage}>
										<option selected disabled value=''>
											English
										</option>

										<option onClick={showGreeceLanguage}>
											Greek
										</option>
									</select>
								</li>
							</ul>
						</nav>
						<nav className={`${classes.nav} ${classes.customMenu}`}>
							<ul>
								<li>
									<MenuIcon
										onClick={() => {
											SetBurgerMenuStatus(true);
										}}
									/>
								</li>
							</ul>
						</nav>
					</div>
				</header>
			)}

			{!englishLanguage && (
				<header className={classes.header}>
					<SideBar
						burgerMenuStatus={burgerMenuStatus}
						SetBurgerMenuStatus={SetBurgerMenuStatus}
					/>
					<div className={classes.container}>
						<div
							className={classes.logo}
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Link href='/'>
								<a>
									<Image
										className='logo-img'
										src='/images/mainlogo.png'
										alt='LOGO'
										layout='fill'
										objectFit='contain'
									/>
								</a>
							</Link>
						</div>
						<nav className={`${classes.nav} ${classes.showNav}`}>
							<ul>
								<li>
									<Link href='/'>
										<a
											id={
												router.pathname == "/" ? classes.active : ""
											}>
											Αρχική
										</a>
									</Link>
								</li>

								<li>
									<Link href='/about-us'>
										<a
											className={classes.worklink}
											id={
												router.pathname == "/about-us"
													? classes.active
													: ""
											}>
											Για εμάς
										</a>
									</Link>
								</li>
								<li>
									<Link href='/product'>
										<a
											className={classes.worklink}
											id={
												router.pathname == "/product"
													? classes.active
													: ""
											}>
											Προϊόντα
										</a>
									</Link>
								</li>

								<li>
									<Link href='/contact'>
										<a
											className={classes.worklink}
											id={
												router.pathname == "/contact"
													? classes.active
													: ""
											}>
											Επικοινωνία
										</a>
									</Link>
								</li>

								<li className='select'>
									<select required onChange={showEnglishLanguage}>
										<option selected disabled value=''>
											Greek
										</option>
										<option onClick={showEnglishLanguage}>
											English
										</option>
									</select>
								</li>
							</ul>
						</nav>
						<nav className={`${classes.nav} ${classes.customMenu}`}>
							<ul>
								<li>
									<MenuIcon
										onClick={() => {
											SetBurgerMenuStatus(true);
										}}
									/>
								</li>
							</ul>
						</nav>
					</div>
				</header>
			)}
		</>
	);
};

export default memo(MainNavigation);
