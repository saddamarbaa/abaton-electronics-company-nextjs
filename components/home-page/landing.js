/** @format */

import Image from "next/image";
import classes from "./landing.module.css";

import { useRouter } from "next/router";

const Landing = () => {
	const router = useRouter();

	const handleClick = () => {
		router.push("/product");
	};
	return (
		<section className={classes.wrapper}>
			<div className={classes.landing}>
				<div className={classes.text}>
					<h2>AGEO 19</h2>
					<div>
						<p>
							People Count and <span>occupancy solutions</span>
						</p>

						<p>
							<Image
								alt='svg logo'
								src='/images/svsgg.svg'
								objectFit='contain'
								width={30}
								height={30}
								style={{ display: "block", marginRight: "10px" }}
							/>
							<span style={{ marginLeft: "7px" }}>
								Vital during the Covid-19 pandemic
							</span>
						</p>
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
							src='/images/facetwo.png'
							alt='product Image'
							layout='fill'
							objectFit='cover'
						/>
					</div>

					<div
						className={classes.image}
						style={{
							position: "relative",
						}}
						onClick={handleClick}>
						<Image
							src='/images/product.jpg'
							alt='product Image'
							layout='fill'
							objectFit='cover'
						/>
					</div>

					<button onClick={handleClick} className={classes.hidden}>
						Check the product
					</button>
				</div>
			</div>
		</section>
	);
};

export default Landing;
