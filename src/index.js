import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.style.css';
import reportWebVitals from './reportWebVitals';

import { RouterProvider } from "react-router-dom";
import router from './router';
import GlobalStyle from './global.styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
		<GlobalStyle />
  </React.StrictMode>
);

reportWebVitals();
