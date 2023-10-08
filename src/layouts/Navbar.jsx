import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { signInWithGoogle, signOut } from "../utilities/firebase";
import { useAuth } from "../contexts/AuthContext";

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
	const { currentUser } = useAuth();
	return currentUser ? <SignOutButton /> : <SignInButton />;
};

const Navbar = ({ title }) => {
	const { currentUser } = useAuth();
	return (
		<nav className='d-flex justify-content-between align-items-center px-4 px-2 bg-info text-white'>
			<h1>{title}</h1>
			<div className='d-flex align-items-center'>
				<NavLink className='text-white mx-3' to={"/"}>
					<h4>Home</h4>
				</NavLink>
				{currentUser ? (
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
