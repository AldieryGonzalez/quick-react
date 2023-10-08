import React, { useContext, useEffect, useState } from "react";
import { auth, database, useDbData, useDbUpdate } from "../utilities/firebase";
import { onValue, ref, update } from "@firebase/database";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [profile, setProfile] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setProfile();
			setCurrentUser(user);

			onValue(
				ref(database, `/users/${user?.uid}`),
				(snapshot) => {
					if (snapshot.val()) setProfile(snapshot.val());
					// const initUserValue = { isAdmin: true };
					// update(ref(database, `/users/${user?.uid}`), initUserValue)
					// 	.then(() => setProfile(initUserValue))
					// 	.catch((error) => setError(error));
				},
				(error) => {
					setError(error);
					console.log(error);
				}
			);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		profile,
		error,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}
