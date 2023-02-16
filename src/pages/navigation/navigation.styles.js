import styled from "styled-components";

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	gap: 15px;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 25px;

	.logo-container {
		height: 100%;
    width: 70px;
    padding: 25px 0px;
	}
`;

export const NavLinksContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-left: 10px; 

	.nav-link {
	cursor: pointer;
	text-transform: uppercase;
	padding: 10px;
	min-width: 50px;

	@media (min-width: 568px) {
		padding: 10px 15px; 
	}

		&:hover {
			text-decoration: underline;
		}
	}
`;