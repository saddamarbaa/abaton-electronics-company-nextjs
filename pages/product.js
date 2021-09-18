/** @format */

import { Fragment } from "react";
import Head from "next/head";

import ProductComponent from "../components/product-page/product";

function AboutUsPage() {
	return (
		<Fragment>
			<Head>
				<title>products</title>
				<meta
					name='description'
					content="Ai Occupancy Monitor

After the AGEO19 is set up you need to set just a number which will indicate the number of people allowed to be inside the building-place and that`'s all.."
				/>
				<meta
					name='description'
					content='	AGEO 19 recognises all people entering a space as well as those leaving. This is even possible if the place has a different entrance point and leaving point. This is achieved through sensors that our team places and regulates in order not to need human intervention again.'
				/>
			</Head>
			<ProductComponent />
		</Fragment>
	);
}

export default AboutUsPage;
