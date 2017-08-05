import React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import store from "./store";
import '../css/index.scss';

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app')
);