import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './sass/xatp.scss'

import {createStore} from "redux";
import {Provider} from "react-redux";
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { rootReducer } from './xapt13Redux/reducers/rootReducer';

const myStore = createStore(rootReducer)


ReactDOM.render(
    <Provider store={myStore}>
      <App />
    </Provider>
  , document.getElementById('root')
);



// const store = createStore(rootReducer);




