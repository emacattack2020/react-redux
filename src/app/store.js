import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reduxStateExample/mathReducer";
import user from "./reduxStateExample/userReducer";
import reminderPro from "./reminderPro/reducers";
import bostonUsers from "./theNewBoston/reducer-users";
import ActiveUserReducer from "./theNewBoston/reducer-active-user";

export default createStore(
    combineReducers({
        math: math, 
        user: user,
        reminderPro: reminderPro,
        bostonUsers: bostonUsers,
        activeUser: ActiveUserReducer
    }),
    {}, 
    applyMiddleware(logger(), thunk, promise())
);