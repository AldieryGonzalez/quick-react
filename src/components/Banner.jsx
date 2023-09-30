import React from "react";

const Banner = ({ title }) => {
	return (
		<div className='m-1 p-1 bg-primary'>
			<h1>{title}</h1>
		</div>
	);
};

export default Banner;
