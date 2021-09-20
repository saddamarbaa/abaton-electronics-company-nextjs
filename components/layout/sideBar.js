/** @format */

import { memo, React, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import Image from "next/image";

import classes from "./MainNavigation.module.css";
import BackDrop from "../UI/backdrop";

const SideBar = ({ burgerMenuStatus, SetBurgerMenuStatus }) => {
	return (
		<>
			{burgerMenuStatus && (
				<BackDrop SetBurgerMenuStatus={SetBurgerMenuStatus}>
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
				</BackDrop>
			)}
		</>
	);
};

export default memo(SideBar);
