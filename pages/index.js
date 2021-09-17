/** @format */

import Head from "next/head";
import React, { Fragment } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/layout/Footer";
import MainNavigation from "../components/layout/MainNavigation";
import Work from "../components/Work";

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Abaton Electronics</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta
					name='description'
					content='Abaton Electronics, a company specializing in automation s, robotics, creating electrical constructions and installing security systems.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MainNavigation />
			<main>
				<About />
				<Work />
				<Features />
				<Contact />
				<Footer />
			</main>
		</Fragment>
	);
}
