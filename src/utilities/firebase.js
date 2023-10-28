import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
	connectDatabaseEmulator,
	getDatabase,
	onValue,
	ref,
	update,
} from "firebase/database";
import {
	connectAuthEmulator,
	getAuth,
	GoogleAuthProvider,
	signInWithCredential,
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
export const database = getDatabase(firebase);
export const auth = getAuth(firebase);

if (!globalThis.EMULATION && import.meta.env.MODE === "development") {
	connectAuthEmulator(auth, "http://127.0.0.1:9099");
	connectDatabaseEmulator(database, "127.0.0.1", 9000);

	signInWithCredential(
		auth,
		GoogleAuthProvider.credential(
			'{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
		)
	);

	// set flag to avoid connecting twice, e.g., because of an editor hot-reload
	globalThis.EMULATION = true;
}

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
