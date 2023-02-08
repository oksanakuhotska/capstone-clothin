import styled from "styled-components";

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	gap: 15px;
	justify-content: space-between;
	margin-bottom: 25px;

	.logo-container {
		width: 70px;
		padding: 25px;
	}

	.nav-link {
	padding: 10px 15px;
	cursor: pointer;
	text-transform: uppercase;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const NavLinksContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;