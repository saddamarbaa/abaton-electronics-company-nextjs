/** @format */

import { memo, React, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import Image from "next/image";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const [burgerMenuStatus, SetBurgerMenuStatus] = useState(false);

	return (
		<>
			<header className={classes.header}>
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
									<a className={classes.active} id='active'>
										Home
									</a>
								</Link>
							</li>

							<li>
								<Link href='/about-us'>
									<a className={classes.worklink}> About us</a>
								</Link>
							</li>
							<li>
								<Link href='/product'>
									<a className={classes.worklink}>Products</a>
								</Link>
							</li>

							<li>
								<Link href='/contact'>
									<a className={classes.contact}> Contact</a>
								</Link>
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

					{/* SideBar */}
					<nav
						className={classes["side-nav"]}
						style={{
							transform: !burgerMenuStatus
								? "translateX(100%) "
								: "translateX(0%)",
						}}>
						<IconButton>
							<CloseIcon
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}
							/>
						</IconButton>
						<ul>
							<li
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}>
								<Link href='/'>Home</Link>
							</li>

							<li
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}>
								<Link href='/about-us'>About us</Link>
							</li>
							<li
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}>
								<Link href='/product'>Products</Link>
							</li>

							<li
								onClick={() => {
									SetBurgerMenuStatus(false);
								}}>
								<Link href='/contact'>Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default memo(MainNavigation);
