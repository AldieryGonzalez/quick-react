import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import LoadBanner from "./components/LoadBanner";
import LoadCourseList from "./components/LoadCourseList";

import { useJsonQuery } from "./utilities/fetch";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import CoursePlan from "./components/CoursePlan";

const App = () => {
	const [term, setTerm] = useState("Fall");
	const [selected, setSelected] = useState({});
	const [open, setOpen] = useState(false);
	const [data, isLoading, error] = useJsonQuery(
		"https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
	);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	if (!isLoading && !error)
		return (
			<>
				<Navbar title={data.title} />
				<Modal open={open} close={closeModal} title='Course Plan'>
					<CoursePlan courses={selected} term={term} />
				</Modal>
				<div className='p-3 mb-5'>
					<CourseList
						term={term}
						courses={data.courses}
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
	else
		return (
			<div className='p-4'>
				<LoadBanner />
				<LoadCourseList />
			</div>
		);
};

export default App;
