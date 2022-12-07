import GlobalContext from 'Contexts/GlobalContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './Router/AppRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalContext>
      <AppRouter />
    </GlobalContext>
  </React.StrictMode>
);

reportWebVitals();
