import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import { BaseLayout } from "./layout/BaseLayout";
import ReduxStateExample from "./reduxStateExample/ReduxStateExample";
import { TestTab } from "./testTab/TestTab";
import { SimpleStateApp } from "./simpleState/SimpleStateApp";
import ReminderProContainer from "./reminderPro/ReminderProContainer";

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
                </Route>
            </Router>
        );
    }
}