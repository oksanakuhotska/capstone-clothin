import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';

import { store } from './store/store';

import { CartProvider } from './contexts/cart.context';

import { GlobalStyle } from './global.styles';
import './index.style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Provider store={store}>
			<CartProvider>
				<App />
				<GlobalStyle />
			</CartProvider>
		</Provider>
  </React.StrictMode>
);
