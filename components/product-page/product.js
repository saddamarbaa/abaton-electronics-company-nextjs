/** @format */

import React, { memo } from "react";
import Features from "./Features";
import WorkOption from "./WorkOption";

const ProductComponent = () => {
	return (
		<React.Fragment>
			<WorkOption />
			<Features />
		</React.Fragment>
	);
};

export default memo(ProductComponent);
