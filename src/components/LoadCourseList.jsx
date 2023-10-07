import React from "react";
import "./CourseList.css";
import LoadCourseCard from "./LoadCourseCard";

const LoadCourseList = () => {
	const courses = new Array(27).fill(0);
	return (
		<div className='course-list'>
			{Object.entries(courses).map((item, index) => {
				return <LoadCourseCard />;
			})}
		</div>
	);
};

export default LoadCourseList;
