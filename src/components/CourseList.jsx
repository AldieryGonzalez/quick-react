import React from "react";
import "./CourseList.css";
import CourseCard from "./CourseCard";
import isConflicted from "../utilities/timeConflicts";
import { useAuth } from "../contexts/AuthContext";
const CourseList = ({ courses, term, selected, setSelected }) => {
	const { currentUser } = useAuth();
	return (
		<div className='course-list'>
			{Object.entries(courses)
				.filter(([, course]) => course.term == term)
				.map(([id, course]) => {
					return (
						<CourseCard
							key={id}
							cid={id}
							course={course}
							conflicted={isConflicted(course, selected)}
							isSelected={id in selected}
							setSelected={setSelected}
							canEdit={!!currentUser}
						/>
					);
				})}
		</div>
	);
};

export default CourseList;
