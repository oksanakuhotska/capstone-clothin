import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, 	createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

// as an actual value you want to access
export const UserContext = createContext({
	setCurrentUser: () => null, 
	currentUser: null,
});

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
	currentUser: null,
}

const userReducer = (state, action) => {
	const { type, payload } = action;

	switch(type) {
		case USER_ACTION_TYPES:
			return {
				...state,
				currentUser: payload
			}
		default: 
			throw new Error(`Unhendled type ${type} in userReducer`);
	}
}

export const UserProvider = ({ children }) => {
	// const [currentUser, setCurrentUser] = useState(null); //  замінили викорисання useState на useReducer
	const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);

	const setCurrentUser = (user) => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
	};

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