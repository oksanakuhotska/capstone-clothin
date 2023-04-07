import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

import App from './App';

import { store, persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';

import { GlobalStyle } from './global.styles';
import './index.style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> */}
			<Elements stripe={stripePromise}>
				<App />
				<GlobalStyle />
			</Elements>
			{/* </PersistGate> */}
		</Provider>
  </React.StrictMode>
);
