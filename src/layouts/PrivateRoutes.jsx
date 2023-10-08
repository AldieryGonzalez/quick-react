import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoutes = () => {
	const { isloading, courses } = useOutletContext();
	const { currentUser } = useAuth();
	console.log(currentUser);
	return currentUser ? (
		<Outlet
			context={{
				isloading: isloading,
				courses: courses,
			}}
		/>
	) : (
		<Navigate to='/' />
	);
};

export default PrivateRoutes;
