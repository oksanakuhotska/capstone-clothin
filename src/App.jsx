import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";

import router from "./router";
import { getCurrentUser } from "./utils/firebase/firebase.utils";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getCurrentUser();
	}, [dispatch]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App;
