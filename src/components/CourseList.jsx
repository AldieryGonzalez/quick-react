import React from "react";
import "./CourseList.css";
import CourseCard from "./CourseCard";
import isConflicted from "../utilities/timeConflicts";
import { useAuth } from "../contexts/AuthContext";
const CourseList = ({ courses, term, selected, setSelected }) => {
	const { currentUser, profile } = useAuth();
	if (!courses) return <h1>Loading ...</h1>;
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
							canEdit={profile && profile.isAdmin}
						/>
					);
				})}
		</div>
	);
};

export default CourseList;
