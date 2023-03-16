import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";

import router from "./router";

import { checkUserSesssion } from "./store/user/user.action";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSesssion());
	}, []);

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App;
