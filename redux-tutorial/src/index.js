import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(rootReducer, allStoreEnhancers);

const action = {
    type: "UPDATE_PRODUCTS",
    payload: {
        newProducts: [
            "Car",
            "4K TV",
            "Laptop"
        ]
    }
}

const actiontwo = {
    type: "UPDATE_NAME",
    payload: {
        name: "RJ"
    }
}
store.dispatch(actiontwo);

ReactDOM.render(
    <Provider store={store}>
        <App title="Hello, world" />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
