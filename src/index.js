import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';

import { store } from './store/store';

import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import { GlobalStyle } from './global.styles';
import './index.style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Provider store={store}>
			<CategoriesProvider>
				<CartProvider>
					<App />
					<GlobalStyle />
				</CartProvider>
			</CategoriesProvider>
		</Provider>
  </React.StrictMode>
);
