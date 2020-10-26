import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from  "redux"

import App from  "./components/App";
import Reducers from "./reducers";

const store =createStore(Reducers);

ReactDOM.render(
    <Provider store={store}>
        <App / >
    </Provider>,
    document.getElementById("root")
);

//Client id  = 150690585145-c0bk32r9msgekdeohliuc5ple0vq80f8.apps.googleusercontent.com