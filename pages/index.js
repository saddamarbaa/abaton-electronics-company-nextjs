/** @format */

import Head from "next/head";
import React, { Fragment } from "react";

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
		</Fragment>
	);
}
