import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from  "redux"
import reduxThunk from "redux-thunk";

import App from  "./components/App";
import reducers from "./reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store =createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App / >
    </Provider>,
    document.getElementById("root")
);

//Client id  = 150690585145-c0bk32r9msgekdeohliuc5ple0vq80f8.apps.googleusercontent.com