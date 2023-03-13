import styled from "styled-components";

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 380px;

	h2 {
		margin: 10px 0;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;

	@media (min-width: 568px) {
		flex-direction: row;
	}
`;