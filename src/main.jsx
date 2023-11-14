import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter} from "react-router-dom"
import {store} from './store.js';
import {Provider } from 'react-redux';
//redux store & provider wrapping app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter >
  <Provider store={store}>
        <App/>
  </Provider>
    </HashRouter>
  </React.StrictMode>
)
