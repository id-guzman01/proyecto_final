import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './provider/ProductProvider.jsx'
import OrderProvider from './provider/OrderProvider.jsx'
import ShowProvider from './provider/ShowProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <OrderProvider>
        <ShowProvider>
          <App />
        </ShowProvider>
      </OrderProvider>
    </ProductProvider> 
  </React.StrictMode>,
)
