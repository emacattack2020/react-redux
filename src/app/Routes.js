import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import { BaseLayout } from "./layout/BaseLayout";
import ReduxStateExample from "./reduxStateExample/ReduxStateExample";
import { TestTab } from "./testTab/TestTab";
import Boston from "./theNewBoston/index";
import { SimpleStateApp } from "./simpleState/SimpleStateApp";
import ReminderProContainer from "./reminderPro/ReminderProContainer";

import App from "./goalCoach/components/App";
import SignIn from "./goalCoach/components/SignIn";
import SignUp from "./goalCoach/components/SignUp";
import GoalCoach from "./goalCoach/GoalCoach";


export class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={BaseLayout} >
                    <IndexRoute component={ReduxStateExample} />
                    <Route path={"reduxStateExample"} component={ReduxStateExample} />
                    <Route path={"testTab"} component={TestTab} />
                    <Route path={"simpleStateApp"} component={SimpleStateApp} />
                    <Route path={"reminderProApp"} component={ReminderProContainer} />
                    <Route path={"boston"} component={Boston} />
                    <Route path={"goalCoach"} component={GoalCoach} />
                    <Route path={"goalCoach/signin"} component={SignIn} />
                    <Route path={"goalCoach/signup"} component={SignUp} />
                    <Route path={"goalCoach/app"} component={App} />
                </Route>
            </Router>
        );
    }
}