import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { useJsonQuery } from "../utilities/fetch";
import Error from "../pages/Error/Error";
import { useDbData } from "../utilities/firebase";

const MainLayout = () => {
	const [data, error] = useDbData("/");
	const isLoading = data === undefined;
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
