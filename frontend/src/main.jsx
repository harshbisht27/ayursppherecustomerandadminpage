import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
    <Auth0Provider
      domain="dev-58tmnphjjzgywfwj.us.auth0.com"
      clientId="6pvpeIvHeXCkg8AKsfhfc6xZWARrKxWZ"
      authorizationParams={{
      redirect_uri: "https://customer-ayushphere.onrender.com/"
    }}    
    >
      <App/>
    </Auth0Provider>
    </StoreContextProvider>
  </BrowserRouter>,
)
