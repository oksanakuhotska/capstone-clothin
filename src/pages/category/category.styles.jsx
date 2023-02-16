import styled from "styled-components";

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) ); 
	align-content: space-between;
	column-gap: 20px;
	row-gap: 50px;

	@media (min-width: 987px) {
		grid-template-columns: repeat( 4, minmax(200px, 1fr) ); 
	}
`;

export const Title = styled.h2`
	font-size: 38px;
	margin-bottom: 25px;
	text-align: center;
`;