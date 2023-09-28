import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Banner from "./Components/Banner";
import CourseList from "./components/CourseList";
import LoadBanner from "./components/LoadBanner";
import LoadCourseList from "./components/LoadCourseList";

import { useJsonQuery } from "./utilities/fetch";

const App = () => {
	const [count, setCount] = useState(0);

	const [data, isLoading, error] = useJsonQuery(
		"https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
	);

	if (!isLoading && !error)
		return (
			<div className='p-4'>
				<Banner title={data.title} />
				<CourseList courses={data.courses} />
			</div>
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
