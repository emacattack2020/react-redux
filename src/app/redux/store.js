import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import reminderPro from "./reducers/reminderProReducer";

export default createStore(
    combineReducers({
        math: math, 
        user: user,
        reminderPro: reminderPro
    }),
    {}, 
    applyMiddleware(logger(), thunk, promise())
);