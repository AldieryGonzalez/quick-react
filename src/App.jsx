import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Routes, Route } from "react-router-dom";
import CoursePage from "./pages/Courses/CoursePage";
import MainLayout from "./layouts/MainLayout";
import EditCourses from "./pages/EditCourses/EditCourses";
import EditCourse from "./pages/EditCourse/EditCourse";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<CoursePage />} />
				<Route path='/edit' element={<EditCourses />} />
				<Route path='/edit/:id' element={<EditCourse />} />
			</Route>
		</Routes>
	);
};

export default App;
