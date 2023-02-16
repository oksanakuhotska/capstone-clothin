import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { RouterProvider } from "react-router-dom";
import router from './router';
import GlobalStyle from './global.styles';

import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import './index.style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<UserProvider>
			<CategoriesProvider>
				<CartProvider>
					<RouterProvider router={router} />
					<GlobalStyle />
				</CartProvider>
			</CategoriesProvider>
		</UserProvider>
  </React.StrictMode>
);

reportWebVitals();
