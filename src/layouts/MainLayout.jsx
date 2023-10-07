import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useJsonQuery } from "../utilities/fetch";
import Error from "../pages/Error/Error";

const MainLayout = () => {
	const [data, isLoading, error] = useJsonQuery(
		"https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
	);
	return (
		<>
			<Navbar title={"CS Course Planner"} />
			{error ? (
				<Error error={error} />
			) : (
				<Outlet
					context={{
						isLoading: isLoading,
						courses: data ? data.courses : null,
					}}
				/>
			)}
		</>
	);
};

export default MainLayout;
