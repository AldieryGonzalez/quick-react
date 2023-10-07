import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { useJsonQuery } from "../utilities/fetch";
import Error from "../pages/Error/Error";

const MainLayout = () => {
	const [data, isLoading, error] = useJsonQuery(
		"https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
	);
	return (
		<>
			<Navbar title={"CS Course Planner"} />
			<div className='p-3 mb-5'>
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
			</div>
		</>
	);
};

export default MainLayout;
