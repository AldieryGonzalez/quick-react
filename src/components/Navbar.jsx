import React from "react";
import TermButton from "./TermButton";

const Navbar = ({ title, currentTerm, setTerm }) => {
	const terms = ["Fall", "Winter", "Spring"];
	return (
		<div className='d-flex justify-content-between align-items-center px-4 px-2 bg-info text-white'>
			<h1>{title}</h1>
			<div
				className='btn-group'
				role='group'
				aria-label='Basic radio toggle button group'>
				{terms.map((term) => {
					return (
						<TermButton
							term={term}
							currentTerm={currentTerm}
							setTerm={setTerm}
							key={term}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
