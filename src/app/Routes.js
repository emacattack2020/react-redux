import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import { BaseLayout } from "./layout/BaseLayout";
import ReduxStateExample from "./reduxStateExample/ReduxStateExample";
import { CollapseExample } from "./collapse/CollapseExample";
import Boston from "./theNewBoston/index";
import { SimpleStateApp } from "./simpleState/SimpleStateApp";
import ReminderProContainer from "./reminderPro/ReminderProContainer";

import App from "./goalCoach/components/App";
import SignIn from "./goalCoach/components/SignIn";
import SignUp from "./goalCoach/components/SignUp";
import GoalCoach from "./goalCoach/GoalCoach";

import TestApp from "./test/app";

import AjaxApp from "./ajax/components/App";


export class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={BaseLayout} >
                    <IndexRoute component={ReduxStateExample} />
                    <Route path={"reduxStateExample"} component={ReduxStateExample} />
                    <Route path={"collapseExample"} component={CollapseExample} />
                    <Route path={"simpleStateApp"} component={SimpleStateApp} />
                    <Route path={"reminderProApp"} component={ReminderProContainer} />
                    <Route path={"ajaxApp"} component={AjaxApp} />
                    <Route path={"boston"} component={Boston} />
                    <Route path={"goalCoach"} component={GoalCoach} />
                    <Route path={"goalCoach/signin"} component={SignIn} />
                    <Route path={"goalCoach/signup"} component={SignUp} />
                    <Route path={"goalCoach/app"} component={App} />
                    <Route path={"test/app"} component={TestApp} />
                </Route>
            </Router>
        );
    }
}