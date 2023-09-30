import React from "react";
import "./CourseList.css";
import CourseCard from "./CourseCard";

const CourseList = ({ courses, term }) => {
	return (
		<div className='course-list'>
			{Object.entries(courses)
				.filter(([, course]) => course.term == term)
				.map(([id, course]) => {
					return <CourseCard key={id} course={course} />;
				})}
		</div>
	);
};

export default CourseList;
