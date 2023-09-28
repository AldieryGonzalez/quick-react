import React from "react";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
	console.log(course);
	return (
		<div className='card m-1 p-2'>
			<div className='card-body d-flex flex-column justify-content-between'>
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
		</div>
	);
};

export default CourseCard;
