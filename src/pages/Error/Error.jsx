import React from "react";

const Error = ({ error }) => {
	console.log(Object.values(error));
	return <div>{error.code}</div>;
};

export default Error;
