import { RouterProvider } from "react-router-dom";
import router from './router';
import GlobalStyle from './global.styles';

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
			<GlobalStyle />
		</>
	)
}

export default App;
