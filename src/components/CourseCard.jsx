import React from "react";
import "./CourseCard.css";

const CourseCard = ({ cid, course, conflicted, isSelected, setSelected }) => {
	const handleClick = (e) => {
		if (isSelected) {
			setSelected((prev) => {
				const { [cid]: temp, ...rest } = prev;
				return rest;
			});
		} else {
			setSelected((prev) => {
				return { ...prev, [cid]: course };
			});
		}
	};
	const handleEdit = (e) => {
		e.stopPropagation();
	};

	return (
		<button
			className={`card m-1 p-1 course-card${
				isSelected ? " course-card-selected" : ""
			}${conflicted ? " course-card-conflicted" : ""}`}
			disabled={conflicted}
			onClick={(e) => handleClick(e)}>
			<div className='course-edit-button' onClick={(e) => handleEdit(e)}>
				<i className='bi bi-pencil-square w-100'></i>
			</div>
			<div className='card-body d-flex flex-column justify-content-between w-100'>
				<div>
					<h5 className='card-title'>{`CS ${course.number}`}</h5>
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

export default CourseCard;
