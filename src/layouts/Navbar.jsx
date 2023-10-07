import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";

const SignInButton = () => (
	<button className='ms-auto btn btn-dark' onClick={signInWithGoogle}>
		Sign in
	</button>
);

const SignOutButton = () => (
	<button className='ms-auto btn btn-dark' onClick={signOut}>
		Sign out
	</button>
);

const AuthButton = () => {
	const [user] = useAuthState();
	return user ? <SignOutButton /> : <SignInButton />;
};

const Navbar = ({ title }) => {
	const [user] = useAuthState();
	return (
		<nav className='d-flex justify-content-between align-items-center px-4 px-2 bg-info text-white'>
			<h1>{title}</h1>
			<div className='d-flex align-items-center'>
				<NavLink className='text-white mx-3' to={"/"}>
					<h4>Home</h4>
				</NavLink>
				{user ? (
					<NavLink className='text-white mx-3' to={"/edit"}>
						<h4>Edit</h4>
					</NavLink>
				) : null}

				<AuthButton />
			</div>
		</nav>
	);
};

export default Navbar;
