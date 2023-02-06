import { initializeApp } from 'firebase/app';
import { 
	getAuth, 
	signInWithRedirect, 
	signInWithPopup, 
	GoogleAuthProvider 
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvLJK5BhKbUiIPPJ024EMqe28mDHygHoM",
  authDomain: "capstone-clothing-cfc45.firebaseapp.com",
  projectId: "capstone-clothing-cfc45",
  storageBucket: "capstone-clothing-cfc45.appspot.com",
  messagingSenderId: "727589550381",
  appId: "1:727589550381:web:e6646332d1b7dedcb57ba4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());


	// якщо не має userSnapShot, буде створено
	if(!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email, 
				createAt
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;
}

// якщо юзер дані існуюють, то виконається цей код