import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reduxStateExample/mathReducer";
import user from "./reduxStateExample/userReducer";

import reminderPro from "./reminderPro/reducers";

import bostonUsers from "./theNewBoston/reducers/reducer-users";
import ActiveUserReducer from "./theNewBoston/reducers/reducer-active-user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-disable no-underscore-dangle */
export default createStore(
    combineReducers({
        math: math, 
        user: user,
        reminderPro: reminderPro,
        bostonUsers: bostonUsers,
        activeUser: ActiveUserReducer
    }),
    {}, 
    composeEnhancers(
    applyMiddleware(logger(), thunk, promise()),
));
/* eslint-enable */