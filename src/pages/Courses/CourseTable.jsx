import React from "react";

const CourseTable = ({ courses, term }) => {
	return (
		<>
			<h3>{`${term} Courses`}</h3>
			<table className='table table-hover table-striped'>
				<thead>
					<tr>
						<th scope='col'>Class Nmbr</th>
						<th scope='col'>Title</th>
						<th scope='col'>Meet Days</th>
						<th scope='col'>Meet Time</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(courses).map(([cid, course]) => {
						const [courseDay, courseTime] = course.meets.split(" ");
						return (
							<tr key={cid}>
								<th>{`CS ${course.number}`}</th>
								<td>{`${course.title}`}</td>
								<td>{`${courseDay}`}</td>
								<td>{`${courseTime}`}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default CourseTable;
