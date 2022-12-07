import ChatContext from 'Contexts/ChatContext';
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
      <ChatContext>
        <AppRouter />
      </ChatContext>
    </GlobalContext>
  </React.StrictMode>
);

reportWebVitals();
