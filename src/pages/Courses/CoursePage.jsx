import React, { useState } from "react";
import { useOutletContext } from "react-router";

import CourseList from "../../components/CourseList";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import CoursePlan from "../../components/CoursePlan";
import LoadCourseList from "../../components/LoadCourseList";

const CoursePage = () => {
	const { isLoading, courses } = useOutletContext();
	const [term, setTerm] = useState("Fall");
	const [selected, setSelected] = useState({});
	const [open, setOpen] = useState(false);
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	if (isLoading) return <LoadPage />;
	return (
		<>
			<Modal open={open} close={closeModal} title='Course Plan'>
				<CoursePlan courses={selected} term={term} />
			</Modal>
			<div className='p-3 mb-5'>
				<CourseList
					term={term}
					courses={courses}
					selected={selected}
					setSelected={setSelected}
				/>
			</div>
			<Footer
				selected={selected}
				currentTerm={term}
				setTerm={setTerm}
				openModal={openModal}
			/>
		</>
	);
};

const LoadPage = () => {
	return (
		<>
			<div className='p-3 mb-5'>
				<LoadCourseList />
			</div>
		</>
	);
};

export default CoursePage;
