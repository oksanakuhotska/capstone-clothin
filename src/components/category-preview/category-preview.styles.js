import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
	display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat( 1, minmax(150px, 1fr) );
    column-gap: 20px;
		row-gap: 25px;

		@media (min-width: 568px) {
			grid-template-columns: repeat( 2, minmax(200px, 1fr) ); 
		}

		@media (min-width: 987px) {
			grid-template-columns: repeat( 4, minmax(200px, 1fr) ); 
		}
  }
`;