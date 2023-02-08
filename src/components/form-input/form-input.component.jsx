import { FormGroup } from './form-input.styles.js';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<FormGroup>
			<input className="form-input" {...otherProps}	/>
			{label && (
				<label 
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} form-input-label`}>{label}</label>
			)}
		</FormGroup>
	);
};

export default FormInput;