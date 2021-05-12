import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 여러 개를 받으려면 중괄호로 묶어야 한다. { App, sum }
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
