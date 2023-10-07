import React from "react";
import "./CourseCard.css";
import { Button } from "bootstrap";

const LoadCourseCard = () => {
	return (
		<button className='card m-1 p-1 course-card' disabled>
			<div className='card-body d-flex flex-column justify-content-between w-100'>
				<div>
					<h5 className='card-title placeholder-wave'>
						<span className='placeholder opacity-25 col-8'></span>
					</h5>
					<p className='card-text placeholder-wave'>
						<span className='placeholder opacity-25 col-7'></span>
						<span className='placeholder opacity-25 col-4 mx-1'></span>
						<span className='placeholder opacity-25 col-4'></span>
						<span className='placeholder opacity-25 col-6 mx-1'></span>
						<span className='placeholder opacity-25 col-8'></span>
					</p>
				</div>
				<div>
					<hr></hr>
					<p className='card-text text-center'>
						<span className='placeholder opacity-25 col-9'></span>
					</p>
				</div>
			</div>
		</button>
	);
};

export default LoadCourseCard;
