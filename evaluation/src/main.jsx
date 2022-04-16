import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { TableContextProvider } from './Context/TableContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TableContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TableContextProvider>

  </React.StrictMode>
)
