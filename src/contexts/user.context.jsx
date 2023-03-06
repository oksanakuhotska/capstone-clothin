import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, 	createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// as an actual value you want to access
export const UserContext = createContext({
	setCurrentUser: () => null, 
	currentUser: null,
});

// export const 

const userReducer = (state, action) => {
	const { type, payload } = action;

	
	
}

export const UserProvider = ({ children }) => {
	// const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if(user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};