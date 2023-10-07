import React from "react";
import TermButton from "./TermButton";

const Footer = ({ currentTerm, setTerm, openModal }) => {
	const terms = ["Fall", "Winter", "Spring"];
	return (
		<div className='d-flex fixed-bottom justify-content-between align-items-center px-4 py-2 bg-info text-white'>
			<div className='d-flex  align-items-center'>
				<div
					className='btn-group mx-2'
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
			<button
				type='button'
				className='btn btn-outline-dark ms-auto'
				data-toggle='modal'
				onClick={openModal}>
				Course Plan
			</button>
		</div>
	);
};

export default Footer;
