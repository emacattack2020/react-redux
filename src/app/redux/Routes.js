import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import { BaseLayout } from "./components/BaseLayout";
import ReduxStateExample from "./containers/ReduxStateExample";
import { TestTab } from "./components/TestTab";
import { SimpleStateApp } from "./components/simpleState/SimpleStateApp";
import ReminderProApp from "./containers/ReminderProApp";

export class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={BaseLayout} >
                    <IndexRoute component={ReduxStateExample} />
                    <Route path={"reduxStateExample"} component={ReduxStateExample} />
                    <Route path={"testTab"} component={TestTab} />
                    <Route path={"simpleStateApp"} component={SimpleStateApp} />
                    <Route path={"reminderProApp"} component={ReminderProApp} />
                </Route>
            </Router>
        );
    }
}