import React from 'react';
import ReactDOM from 'react-dom/client';
//import FunComp from './FunComp';
import './Mycss.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Hooks from './Hooks';
//import Mymap from './Mymap';
//import Myapi from './Myapi';
//import Nav from './shopify/Nav';
//import Home from './shopify/Home';
import Main from './shopify/Main';
import { Provider } from 'react-redux';
import store from './shopify/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <Provider store={store}>
  <Main/>
 </Provider>

);


