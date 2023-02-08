import { ButtonContainer } from "./button.styles";

const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted'
};

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
	<ButtonContainer 
		className={BUTTON_TYPE_CLASSES[buttonType]}
		{...otherProps}
	>
		{children}
	</ButtonContainer>
	);
};

export default Button;