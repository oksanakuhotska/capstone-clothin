import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

import { store, persistor } from './store/store';

import { GlobalStyle } from './global.styles';
import './index.style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
				<GlobalStyle />
			</PersistGate>
		</Provider>
  </React.StrictMode>
);
