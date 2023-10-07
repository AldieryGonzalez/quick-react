import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CoursePage from "./pages/Courses/CoursePage";
import EditCourses from "./pages/EditCourses/EditCourses";
import EditCourse from "./pages/EditCourse/EditCourse";
import Error from "./pages/Error/Error";
import PrivateRoutes from "./layouts/PrivateRoutes";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<CoursePage />} />
				<Route path='/edit' element={<EditCourses />} />
				<Route path='/edit/:id' element={<EditCourse />} />
			</Route>
			<Route path='*' element={<MainLayout />}>
				<Route
					index
					element={
						<Error error={{ code: "Error 404 - Page not found" }} />
					}
				/>
			</Route>
		</Routes>
	);
};

{
	/* <Route path='/edit' element={<PrivateRoutes />}>
<Route index element={<EditCourses />} />
<Route path='/edit/:id' element={<EditCourse />} />
</Route> */
}

export default App;
