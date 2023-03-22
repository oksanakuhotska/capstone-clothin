import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	* {
		border-style: border-box;
	}

	body {
		margin: 0;
		padding: 15px 20px;
		overflow-x: hidden;
		font-family: 'PT Sans Narrow', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		@media (min-width: 470px){
			padding: 20px 40px;
			overflow: auto;
		}
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;

