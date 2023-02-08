import {
	signInWithGooglePopup,
	createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
	const logGooglePopupUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	}

	return (
		<div>
			<h1>Sign In Page</h1>
			<Button onClick={logGooglePopupUser}>Sign in with Google Popup</Button>
			<SignUpForm />
		</div>
	)
};

export default SignIn;