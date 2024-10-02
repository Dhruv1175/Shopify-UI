import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Main from './shopify/Main';
import { Provider } from 'react-redux';
import store from './shopify/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <Provider store={store}>
  <Main/>
 </Provider>

);


