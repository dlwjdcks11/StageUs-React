import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/index'
import GlobalStyle from './component/GlobalStyle'

ReactDOM.render(  
    <React.StrictMode>
        <Provider store={store}><GlobalStyle/><App/></Provider>
    </React.StrictMode>,
    document.getElementById("root")
);