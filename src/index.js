import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { RouterProvider } from "react-router-dom";
import router from './router';
import GlobalStyle from './global.styles';

import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';

import './index.style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<UserProvider>
			<ProductsProvider>
				<RouterProvider router={router} />
				<GlobalStyle />
			</ProductsProvider>
		</UserProvider>
  </React.StrictMode>
);

reportWebVitals();
