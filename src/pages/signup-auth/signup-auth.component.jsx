import { useNavigate } from 'react-router-dom';

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";
import { SignUpFormContainer, SignUpSubText } from './signup-auth.styles';


const SignUpAuth = () => {
	const navigate = useNavigate();

	const goToSighInAuthHandler = () => {
		navigate('/login');
	};

	return (
		<SignUpFormContainer>
			<SignUpForm />
			<SignUpSubText>
				I already have an account
			</SignUpSubText>
			<Button onClick={goToSighInAuthHandler}>Login</Button>
		</SignUpFormContainer>
	)
};

export default SignUpAuth;