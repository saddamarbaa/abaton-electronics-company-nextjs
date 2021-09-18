/** @format */

import { Fragment } from "react";
import Head from "next/head";

import ContactComponent from "../components/contact-page/contact";

function ContactPage() {
	return (
		<Fragment>
			<Head>
				<title>Contact us</title>
				<meta
					name='description'
					content="Whether you're interested in pricing, a 30 day trial, or a demo of the dashboard, we'd be delighted to open a dialogue.
Complete the form below and we'll be in touch as soon as we can."
				/>
			</Head>
			<ContactComponent />
		</Fragment>
	);
}

export default ContactPage;
