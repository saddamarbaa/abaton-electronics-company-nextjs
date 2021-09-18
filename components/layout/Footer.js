/** @format */

import React, { memo } from "react";
import Fade from "react-reveal/Fade";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./Footer.module.css";
import ScrollToTopComponent from "./scrollToTop";

const Footer = () => {
	return (
		<div className={classes.footer}>
			<ScrollToTopComponent />
			<div className={classes["footer-head"]}>
				<div
					className={classes.logo}
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Link href='/'>
						<a>
							<Image
								src='/images/logo.png'
								alt='logo Image'
								layout='fill'
								objectFit='cover'
							/>
						</a>
					</Link>
				</div>

				<nav className={classes.nav}>
					<Link href='/'>
						<a>Home</a>
					</Link>

					<Link href='/about-us'>
						<a>About us</a>
					</Link>

					<Link href='/product'>
						<a>Products</a>
					</Link>

					<Link href='/contact'>
						<a> Contact</a>
					</Link>
				</nav>

				<div className={classes.contacts}>
					<p className={classes["hide-ms"]}>
						<span>Contact</span>
					</p>
					<p>
						<span>fax: </span> 2410624625
					</p>
					<p>
						<span>mobile: </span> 698325636
					</p>
					<p>
						<span>Email: </span>info@abatonelectronic.gr
					</p>
					<p>
						<span>Address: </span> Cairo 25.41335 Larissa
					</p>
				</div>
				<div className={classes["social-media"]}>
					<p>Social Media</p>
					<FacebookIcon className={classes.icon} />
					<InstagramIcon className={classes.icon} />
					<TwitterIcon className={classes.icon} />
					<MailOutlineIcon className={classes.icon} />
					<LinkedInIcon className={classes.icon} />
					{/* <FilterVintageIcon className={classes.icon} /> */}
				</div>
			</div>

			<div className={classes["footer-bottom"]}>
				<div></div>
				<Fade right big>
					<p>&copy; 2011 Abaton Electronics | Power By: PHONEIX</p>
				</Fade>
			</div>
		</div>
	);
};

export default memo(Footer);
