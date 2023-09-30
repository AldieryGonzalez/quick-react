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

const App = () => {
	const [term, setTerm] = useState("Fall");
	const [selected, setSelected] = useState({ F101: 0 });

	const [data, isLoading, error] = useJsonQuery(
		"https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
	);

	if (!isLoading && !error)
		return (
			<>
				<Navbar
					title={data.title}
					currentTerm={term}
					setTerm={setTerm}
				/>
				<div className='p-3'>
					<CourseList
						term={term}
						courses={data.courses}
						selected={selected}
						setSelected={setSelected}
					/>
				</div>
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
