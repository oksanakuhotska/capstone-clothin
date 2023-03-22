import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/error-page/error-page.component";
import Home from "../pages/home/home.component";
import Navigation from "../pages/navigation/naviagation.component";
import Authentication from "../pages/authentication/authentication.component";
import Shop from "../pages/shop/shop.component";
import Checkout from "../pages/checkout/checkout.component";
import SignUpAuth from "../pages/signup-auth/signup-auth.component";
import SignInAuth from "../pages/signin-auth/signin-auth.component";

const Contact = () => {
	return (
		<h1>Contact is HERE</h1>
	)
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigation />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						element: <Home />,
						index: true,
					},
					{
						path: "shop/*",
						element: <Shop />,
					},
					{
						path: "contact",
						element: <Contact />,
					},
					{
						path: "auth",
						element: <Authentication />,
					},
					{
						path: "signup",
						element: <SignUpAuth />,
					},
					{
						path: "login",
						element: <SignInAuth />,
					},
					{
						path: "cart",
						element: <Checkout />,
					},
					{
						path: "checkout",
						element: <Checkout />,
					},
				],
			}
		],
	},
]);

export default router;

