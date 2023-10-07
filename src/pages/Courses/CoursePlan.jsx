import React from "react";
import gif from "../../assets/AddCourses.gif";
import CourseTable from "./CourseTable";

const CoursePlan = ({ courses }) => {
	if (Object.keys(courses).length != 0) {
		let fallCourses = [];
		let winterCourses = [];
		let springCourses = [];
		Object.entries(courses).forEach(([cid, course]) => {
			if (course.term == "Fall") fallCourses.push(course);
			else if (course.term == "Winter") winterCourses.push(course);
			else springCourses.push(course);
		});
		// console.log(fallCourses, winterCourses, springCourses);

		return (
			<>
				{fallCourses.length > 0 ? (
					<>
						<CourseTable courses={fallCourses} term={"Fall"} />
						<hr></hr>
					</>
				) : (
					<></>
				)}
				{winterCourses.length > 0 ? (
					<>
						<CourseTable courses={winterCourses} term={"Winter"} />
						<hr></hr>
					</>
				) : (
					<></>
				)}
				{springCourses.length > 0 ? (
					<>
						<CourseTable courses={springCourses} term={"Spring"} />
					</>
				) : (
					<></>
				)}
			</>
		);
	} else {
		return (
			<>
				<p className='text-center'>
					To add courses, click on the cards as shown
				</p>
				<img src={gif} className='w-100' />
			</>
		);
	}
};

export default CoursePlan;
