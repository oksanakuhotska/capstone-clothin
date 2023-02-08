import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/error-page/error-page.component";
import Home from "../pages/home/home.component";
import Navigation from "../pages/navigation/naviagation.component";
import Authentication from "../pages/authentication/authentication.component";

const Shop = () => {
	return (
		<h1>SHop is HERE</h1>
	)
};

const Contact = () => {
	return (
		<h1>Contact is HERE</h1>
	)
};

const Cart = () => {
	return (
		<h1>Cart is HERE</h1>
	)
};


const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigation />,
		errorElement: <ErrorPage/>,
		children: [
			{
				element: <Home />,
				errorElement: <ErrorPage/>,
				index: true,
			},
			{
				path: "shop",
				element: <Shop />,
				errorElement: <ErrorPage/>,
			},
			{
				path: "contact",
				element: <Contact />,
				errorElement: <ErrorPage/>,
			},
			{
				path: "auth",
				element: <Authentication />,
				errorElement: <ErrorPage/>,
			},
			{
				path: "cart",
				element: <Cart />,
				errorElement: <ErrorPage/>,
			},
		],
	},
	
	// {
	// 	path: "/shop",
	// 	element: <Shop />,
	// 	errorElement: <ErrorPage/>,
	// },
]);

export default router;

