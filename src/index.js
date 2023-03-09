import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';

import { store } from './store/store';

import { GlobalStyle } from './global.styles';
import './index.style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Provider store={store}>
			<App />
			<GlobalStyle />
		</Provider>
  </React.StrictMode>
);
