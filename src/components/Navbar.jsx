import React from "react";

const Navbar = ({ title }) => {
	return (
		<div className='d-flex justify-content-between align-items-center px-4 px-2 bg-info text-white'>
			<h1>{title}</h1>
		</div>
	);
};

export default Navbar;
