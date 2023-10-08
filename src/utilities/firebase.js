import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAZgCTuLIe1CLWemsSqZ8ma71djfEdhKxk",
	authDomain: "quick-react-a9480.firebaseapp.com",
	databaseURL: "https://quick-react-a9480-default-rtdb.firebaseio.com",
	projectId: "quick-react-a9480",
	storageBucket: "quick-react-a9480.appspot.com",
	messagingSenderId: "783346062865",
	appId: "1:783346062865:web:fc94091bbfdef6bf9d83b0",
	measurementId: "G-YN4P35RPD9",
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
export const auth = getAuth(firebase);

export const signInWithGoogle = () => {
	signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));
export { firebaseSignOut as signOut };

export const useDbData = (path) => {
	const [data, setData] = useState();
	const [error, setError] = useState(null);

	useEffect(
		() =>
			onValue(
				ref(database, path),
				(snapshot) => {
					setData(snapshot.val());
				},
				(error) => {
					setError(error);
				}
			),
		[path]
	);

	return [data, error];
};

const makeResult = (error) => {
	const timestamp = Date.now();
	const message =
		error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
	return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
	const [result, setResult] = useState();
	const updateData = useCallback(
		(value) => {
			update(ref(database, path), value)
				.then(() => setResult(makeResult()))
				.catch((error) => setResult(makeResult(error)));
		},
		[database, path]
	);

	return [updateData, result];
};
