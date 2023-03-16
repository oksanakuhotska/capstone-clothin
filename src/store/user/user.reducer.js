import { USER_ACTION_TYPES } from "./user.type";

const INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch(type) {
		//replaced on success type
		case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
			};
			//added failed type
		case USER_ACTION_TYPES.SIGN_IN_FAILED:
			return {
				...state, 
				error: payload,
			};
		default: 
			return state;
	}
};