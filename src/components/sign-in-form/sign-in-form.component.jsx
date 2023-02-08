import { useState } from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { 
	SignInContainer, 
	ButtonsContainer 
} from "../sign-in-form/sign-in-form.styles";

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};
	
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}; 

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
			console.log(response)
			resetFormFields();
		} catch(error) {
				switch (error.code) {
					case 'auth/wrong-password':
						alert('incorrect password for email');
						break;
					case 'auth/user-not-found':
						alert('no user associated with this email');
						break;
					default:
						console.log(error);
				}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({...formFields, [name]: value});
	};

	return (
		<SignInContainer>
			<h2>I already have an account</h2>
			<p>Sign in with your email and password</p>
			<form onSubmit={handleSubmit}>
				<FormInput 
					label='Email'
					type='email' 
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput 
					label='Password'
					type='password' 
					required 
					onChange={handleChange} 
					name='password' 
					value={password} 
				/>
				<ButtonsContainer>
					<Button type="submit">Sign In</Button>
					<Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	)
};

export default SignInForm;