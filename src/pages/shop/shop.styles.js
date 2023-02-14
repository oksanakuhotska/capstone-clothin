import styled from "styled-components";

export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) ); 
	align-content: space-between;
	column-gap: 10px;
	row-gap: 50px;
`;