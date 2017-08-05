import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reduxStateExample/mathReducer";
import user from "./reduxStateExample/userReducer";
import reminderPro from "./reminderPro/reducers";

export default createStore(
    combineReducers({
        math: math, 
        user: user,
        reminderPro: reminderPro
    }),
    {}, 
    applyMiddleware(logger(), thunk, promise())
);