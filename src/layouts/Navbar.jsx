import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ title }) => {
	return (
		<nav className='d-flex justify-content-between align-items-center px-4 px-2 bg-info text-white'>
			<h1>{title}</h1>
			<div className='d-flex align-items-center'>
				<NavLink className={`text-white mx-3`} to={"/"}>
					<h4>Home</h4>
				</NavLink>
				<NavLink className='text-white' to={"/edit"}>
					<h4>Edit</h4>
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
