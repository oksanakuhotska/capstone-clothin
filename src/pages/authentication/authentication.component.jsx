import { useNavigate } from "react-router-dom";

import Button from "../../components/button/button.component";
// import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
// import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
	const navigate = useNavigate();

	const goToSignUpAuthHandler = () => {
		navigate('/signup');
	};
	const goToSignInAuthHandler = () => {
		navigate('/login');
	};

	return (
		<AuthenticationContainer>
			<Button onClick={goToSignUpAuthHandler}>Create an account</Button>
			<Button onClick={goToSignInAuthHandler}>Already have an account</Button>

			{/* <SignInForm />
			<SignUpForm /> */}
		</AuthenticationContainer>
	)
};

export default Authentication;