import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {browserHistory} from "react-router";

import math from "./reduxStateExample/mathReducer";
import user from "./reduxStateExample/userReducer";

import reminderPro from "./reminderPro/reducers";

import bostonUsers from "./theNewBoston/reducers/reducer-users";
import ActiveUserReducer from "./theNewBoston/reducers/reducer-active-user";

import goalCoachReducer from "./goalCoach/reducers/reducer_user";
import goalsReducer from "./goalCoach/reducers/reducer_goals";
import completedGoalsReducer from "./goalCoach/reducers/reducer_completed_goals";

import { logUser } from './goalCoach/actions';

import {firebaseApp}  from "./firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-disable no-underscore-dangle */
const store = createStore(
    combineReducers({
        math: math, 
        user: user,
        reminderPro: reminderPro,
        bostonUsers: bostonUsers,
        activeUser: ActiveUserReducer,
        goalCoachReducer: goalCoachReducer,
        goals: goalsReducer,
        completeGoals: completedGoalsReducer
    }),
    {}, 
    composeEnhancers(
    applyMiddleware(logger(), thunk, promise()),
));
/* eslint-enable */
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
     console.log('user has signed in or up', user);
     const { email } = user;
     store.dispatch(logUser(email));
     browserHistory.push('/goalCoach/app');
  } else {
     console.log('user has signed out or still needs to sign in.')
     browserHistory.replace('/goalCoach/signin');
  }
})

export default store;