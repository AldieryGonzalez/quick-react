import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useAuthState } from "../utilities/firebase";

const PrivateRoutes = () => {
	const { isloading, courses } = useOutletContext();
	const [user] = useAuthState();
	console.log(user);
	return user ? (
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
