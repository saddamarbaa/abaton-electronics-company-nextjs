/** @format */

import Head from "next/head";
import React, { Fragment, Suspense } from "react";

import LoadingSpinner from "../components/UI/LoadingSpinner";
// const Layout = React.lazy(() => import("../components/layout/Layout"));
import Layout from "../components/layout/Layout";
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
			<Layout></Layout>

			{/* <Suspense
				fallback={
					<div className='centered'>
						<LoadingSpinner />
					</div>
				}>
				<Layout></Layout>
			</Suspense> */}
		</Fragment>
	);
}
