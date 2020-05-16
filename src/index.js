import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import rootReducer from './store/store'
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from "react-redux";


function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools()
    );
}

ReactDOM.render(
    <Provider store={configureStore()}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
