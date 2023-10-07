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

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import CoursePage from "./pages/CoursePage";

const App = () => {
	const [data, isLoading, error] = useJsonQuery(
		"https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
	);

	if (!isLoading && !error)
		return (
			<>
				<Navbar title={data.title} />
				<CoursePage courses={data.courses} />
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
