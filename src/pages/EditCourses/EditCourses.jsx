import React from "react";
import { useOutletContext } from "react-router";
import LoadCourseList from "../../components/LoadCourseList";
import CourseEditCard from "./CourseEditCard";

const EditCourses = () => {
	const { isLoading, courses } = useOutletContext();
	if (isLoading) return <LoadCourseList />;
	return (
		<div className='course-list'>
			{Object.entries(courses).map(([id, course]) => {
				return <CourseEditCard key={id} cid={id} course={course} />;
			})}
		</div>
	);
};

export default EditCourses;
