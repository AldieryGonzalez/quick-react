import React from "react";

const CourseList = ({ courses }) => {
	return (
		<div>
			{Object.entries(courses).map(([id, course]) => {
				return (
					<div
						key={
							id
						}>{`${course.term} CS ${course.number}: ${course.title}}`}</div>
				);
			})}
		</div>
	);
};

export default CourseList;
