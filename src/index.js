import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import reportWebVitals from './reportWebVitals';

import { ToastContainer } from 'react-toastify';
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";

import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer newestOnTop />
    <Header/>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
