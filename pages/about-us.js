/** @format */

import { Fragment } from "react";
import Head from "next/head";

import AboutUsComponent from "../components/about-us-page/about-us";

function AboutUsPage() {
	return (
		<Fragment>
			<Head>
				<title>About Us</title>
				<meta
					name='description'
					content="	We are Abaton Electronics, a company specializing in
							automation`'s, robotics, creating electrical
							constructions and installing security systems."
				/>
				<meta
					name='description'
					content='	Our goal is to make people’s life easier by making some
							ordinary everyday tasks less time consuming with our
							devices.'
				/>
			</Head>
			<AboutUsComponent />
		</Fragment>
	);
}

export default AboutUsPage;
