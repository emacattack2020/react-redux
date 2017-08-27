import React from "react";
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { getNames } from "./action";
import UserList from "./UserList";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>My Users</h1>
                <Button onClick={() => this.props.getNames()} bsStyle="primary">Retrieve names</Button>
                <UserList />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNames: () => {
            dispatch(getNames())
        }
    };
};

export default connect(null, mapDispatchToProps)(App);