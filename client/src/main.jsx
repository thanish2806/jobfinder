import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {store}from './ResumeApp/redux/store.js'  // adjust the path if needed
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
