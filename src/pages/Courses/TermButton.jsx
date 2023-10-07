import React from "react";

const TermButton = ({ term, currentTerm, setTerm }) => {
	return (
		<>
			<input
				type='radio'
				className='btn-check'
				name='termbtnradio'
				id={term}
				autoComplete='off'
				checked={term === currentTerm}
				onChange={() => setTerm(term)}
			/>
			<label className='btn btn-primary' htmlFor={term}>
				{term}
			</label>
		</>
	);
};

export default TermButton;
