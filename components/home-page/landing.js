/** @format */

import Image from "next/image";
import classes from "./landing.module.css";

import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
	const router = useRouter();

	const handleClick = () => {
		router.push("/product");
	};
	return (
		<section className={classes.landing}>
			<FontAwesomeIcon icon='check-square' />

			<div className={classes.text}>
				<h2>AGEO 19</h2>
				<div>
					<p>
						People Count and <span>occupancy solutions</span>
					</p>

					<div className={classes["svgImage"]}>
						<Image
							alt='svg logo'
							src='/images/Group 2.svg'
							objectFit='contain'
							width={400}
							height={46}
							style={{ display: "block" }}
							className={classes.svgImage}
						/>
					</div>
					<p>Vital during the Covid-19 pandemic</p>
				</div>
				<button className={classes.show} onClick={handleClick}>
					Check the product
				</button>
			</div>
			<div>
				<div
					className={classes.image}
					style={{
						position: "relative",
					}}
					onClick={handleClick}>
					<Image
						src='/images/sensor.png'
						alt='product Image'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<div
					className={classes.image}
					style={{
						position: "relative",
					}}
					onClick={handleClick}>
					<Image
						src='/images/facetwo.png'
						alt='product Image'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<button onClick={handleClick} className={classes.hidden}>
					Check the product
				</button>
			</div>
		</section>
	);
};

export default Landing;
