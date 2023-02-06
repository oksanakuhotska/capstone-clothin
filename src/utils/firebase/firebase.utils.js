import { initializeApp } from 'firebase/app';
import { 
	getAuth, 
	signInWithRedirect, 
	signInWithPopup, 
	GoogleAuthProvider 
} from 'firebase/auth';

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