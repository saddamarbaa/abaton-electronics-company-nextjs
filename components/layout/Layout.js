/** @format */

import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "./Footer";
import Work from "../Work";
import Features from "../Features";
import About from "../About";
import Contact from "../Contact";

const Layout = (props) => {
	return (
		<>
			<MainNavigation />
			<main className={classes.main}>
				<About />
				<Work />
				<Features />
				<Contact />
				<Footer />
			</main>
		</>
	);
};

export default Layout;
