import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Routes, Route, Outlet } from "react-router-dom";
import CoursePage from "./pages/Courses/CoursePage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<CoursePage />} />
			</Route>
		</Routes>
	);
};

export default App;
