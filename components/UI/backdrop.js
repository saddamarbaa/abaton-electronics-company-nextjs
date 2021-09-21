/** @format */
import React from "react";
import styled from "styled-components";

const BackDrop = (props) => {
	return <BackdropWrapper>{props.children}</BackdropWrapper>;
};

export default BackDrop;

const BackdropWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 200;
	background: rgba(0, 0, 0, 0.75);
`;
