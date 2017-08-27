import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

export default class LoadingSpinner extends React.Component {
    render(){
        return (
            <div>
                <MuiThemeProvider><CircularProgress /></MuiThemeProvider>
            </div>
        )
    }
}