import React from "react";
import CourseCard from "./CourseCard";
import "./CourseList.css";

const LoadCourseList = () => {
	const width = window.innerWidth;
	const widthRem =
		width / parseFloat(getComputedStyle(document.documentElement).fontSize);
	const cols = Math.floor(widthRem / 14);
	const courses = new Array(cols * 4).fill(0);

	return (
		<div className='course-list'>
			{Object.entries(courses).map((item, index) => {
				return (
					<div key={`${index}item`} className='card m-1 p-2'>
						<div className='card-body d-flex flex-column justify-content-between '>
							<div>
								<h5 className='card-title placeholder-wave'>
									<span className='placeholder col-8'></span>
								</h5>
								<p className='card-text placeholder-wave'>
									<span className='placeholder col-7'></span>
									<span className='placeholder col-4 mx-1'></span>
									<span className='placeholder col-4'></span>
									<span className='placeholder col-6 mx-1'></span>
									<span className='placeholder col-8'></span>
								</p>
							</div>
							<div>
								<hr></hr>
								<p className='card-text text-center placeholder-wave'>
									<span className='placeholder col-9 '></span>
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default LoadCourseList;
