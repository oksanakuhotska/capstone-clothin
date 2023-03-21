import { createSlice } from "@reduxjs/toolkit";

// import { USER_ACTION_TYPES } from "./user.type";

const INITIAL_STATE = {
	currentUser: null,
};

export const userReducer = createSlice({
	name: 'user',
	initialState: INITIAL_STATE,
	reducers: {
		setCurrentUser(state, action) { // setCurrentUser() {} == setCurrentUser: () => {},
			state.currentUser = action.payload
		}, 
	},
})


// export const userReducerOld = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };  //same in redux-toolkit state.currentUser = action.payload 
//     default:
//       return state;
//   }
// };
