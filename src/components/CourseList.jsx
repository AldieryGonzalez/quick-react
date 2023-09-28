import React from "react";
import "./CourseList.css";
import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
	return (
		<div className='course-list'>
			{Object.entries(courses).map(([id, course]) => {
				return <CourseCard key={id} course={course} />;
			})}
		</div>
	);
};

export default CourseList;
