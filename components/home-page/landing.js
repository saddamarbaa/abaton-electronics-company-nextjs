/** @format */

import Image from "next/image";
import classes from "./landing.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../features/language/languageSlice";

import { useRouter } from "next/router";

const Landing = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const englishLanguage = useSelector(selectLanguage);

	const handleClick = () => {
		router.push("/product");
	};

	return (
		<section className={classes.wrapper}>
			<div className={classes.landing}>
				<div className={classes.text}>
					<h2>AGEO 19</h2>
					<div>
						{englishLanguage && (
							<p>
								People Count and <span>occupancy solutions</span>
							</p>
						)}

						{!englishLanguage && (
							<p>
								Μετρητής Ανθρώπων και <span>λύσεις χωρητικότητας</span>
							</p>
						)}

						<p>
							<Image
								alt='svg logo'
								src='/images/svsgg.svg'
								objectFit='contain'
								width={30}
								height={30}
								style={{ display: "block", marginRight: "10px" }}
							/>
							{englishLanguage && (
								<span style={{ marginLeft: "7px" }}>
									Vital during the Covid-19 pandemic
								</span>
							)}

							{!englishLanguage && (
								<span style={{ marginLeft: "7px" }}>
									Ζωτικής σημασίας κατά την διάρκεια της πανδημίας
									Covid-19
								</span>
							)}
						</p>
					</div>
					{englishLanguage && (
						<button className={classes.show} onClick={handleClick}>
							Check the product
						</button>
					)}

					{!englishLanguage && (
						<button className={classes.show} onClick={handleClick}>
							Δες το προϊόν
						</button>
					)}
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
