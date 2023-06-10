import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './provider/ProductProvider.jsx'
import OrderProvider from './provider/OrderProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ProductProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
    </ProductProvider>,
)
