import { useNavigate } from "react-router-dom";

import Button from "../../components/button/button.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { SignInFormContainer, SignInSubText } from "./signin-auth.styles";

const SignInAuth = () => {
	const naviagate = useNavigate();

	const goToSighUpAuthHandler = () => {
		naviagate('/signup');
	}

	return(
		<SignInFormContainer>
			<SignInForm />
			<SignInSubText>Don't have an account?</SignInSubText>
			<Button onClick={goToSighUpAuthHandler}>Create an account</Button>
		</SignInFormContainer>
	)
};

export default SignInAuth;