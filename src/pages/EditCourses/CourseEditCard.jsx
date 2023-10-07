import React from "react";
import { useNavigate } from "react-router";

const CourseEditCard = ({ course, cid }) => {
	const navigate = useNavigate();
	const handleClick = (e) => {
		navigate(`/edit/${cid}`);
	};

	return (
		<button
			className='card m-1 p-1 course-card'
			onClick={(e) => handleClick(e)}>
			<div className='card-body d-flex flex-column justify-content-between w-100'>
				<div>
					<h5 className='card-title'>{`${course.term} CS ${course.number}`}</h5>
					<p className='card-text'>{`${course.title}`}</p>
				</div>
				<div>
					<hr></hr>
					<p className='card-text course-card-footer'>
						{course.meets}
					</p>
				</div>
			</div>
		</button>
	);
};

export default CourseEditCard;
