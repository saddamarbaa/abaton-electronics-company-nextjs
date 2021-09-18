/** @format */

import { Fragment } from "react";

import Footer from "./Footer";
import MainNavigation from "./mainNavigation";

function Layout(props) {
	return (
		<Fragment>
			<MainNavigation />
			<main>{props.children}</main>
			<Footer />
		</Fragment>
	);
}

export default Layout;
