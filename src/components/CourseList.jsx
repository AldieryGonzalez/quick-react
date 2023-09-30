import React from "react";
import "./CourseList.css";
import CourseCard from "./CourseCard";

const CourseList = ({ courses, term, selected, setSelected }) => {
	const stringToDays = (str) => {
		const refDays = ["M", "Tu", "W", "Th", "F"];
		let res = [];
		for (const day of refDays) {
			if (str.includes(day)) res.push(day);
		}
		return res;
	};

	const daysHaveIntersection = (d1, d2) => {
		const intersection = d1.filter((element) => d2.includes(element));
		return intersection.length > 0;
	};

	const isConflicted = (course) => {
		let res = Object.values(selected)
			.filter((selected) => {
				return selected.term == course.term;
			})
			.reduce((acc, sc) => {
				let conflict = true;
				let [courseDays, courseTime] = course.meets.split(" ");
				let [selectedDays, selectedTime] = sc.meets.split(" ");
				courseDays = stringToDays(courseDays);
				selectedDays = stringToDays(selectedDays);
				let dayIntersection = daysHaveIntersection(
					courseDays,
					selectedDays
				);

				let [courseStartTime, courseEndTime] = courseTime
					.replaceAll(":", "")
					.split("-")
					.map((str) => parseInt(str));
				let [selectedStartTime, selectedEndTime] = selectedTime
					.replaceAll(":", "")
					.split("-")
					.map((str) => parseInt(str));

				if (!dayIntersection || course.number == sc.number)
					return acc || false;
				if (
					!(
						courseStartTime <= selectedEndTime &&
						courseEndTime >= selectedStartTime
					)
				) {
					conflict = false;
				}

				return acc || conflict;
			}, false);
		return res;
	};

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
							conflicted={isConflicted(course)}
							isSelected={id in selected}
							setSelected={setSelected}
						/>
					);
				})}
		</div>
	);
};

export default CourseList;
