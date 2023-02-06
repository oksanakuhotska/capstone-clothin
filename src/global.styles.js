import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		border-style: border-box;
	}
	body {
		margin: 0;
		font-family: 'PT Sans Narrow', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
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

export default GlobalStyle;