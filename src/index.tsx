import React from 'react';
import { UseUserTokenContextProvider } from './contexts/UserTokenContext';
import ReactDOM from 'react-dom';
import './css/tailwind.css';
import App from './App';
import UserCartContextProvider from './contexts/UserCartContext';
import LoadingWhileRequestContextProvider from './contexts/LoadingWhileRequestContext';
import AlertContextProvider from './contexts/CartAlertMessageContext';

ReactDOM.render(
  <React.StrictMode>
    <UseUserTokenContextProvider>
      <UserCartContextProvider>
        <LoadingWhileRequestContextProvider>
          <AlertContextProvider>
            <App />
          </AlertContextProvider>
        </LoadingWhileRequestContextProvider>
      </UserCartContextProvider>
    </UseUserTokenContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
