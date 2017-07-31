import React from "react";
import { render } from "react-dom";
// tutorial 15 Home2
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Home2 } from "./components/Home2";
import { MySwiper } from "./components/MySwiper";
import ReactSwiper from "./components/ReactSwiper";

import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();
import MyButton from "./components/MyButton";
import MyRadioButton from "./components/MyRadioButton";
import MyDialog from "./components/MyDialog";
import { MyJqueryUIDialog } from "./components/MyJqueryUIDialog";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home(Stateless Component)",
            homeMounted: true
        }
    }
    onGreet() {
        alert("Hello");
    }
    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }
    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }
    render() {
        let user = {
            name: "Anna",
            hobbies: ["Sports", "Reading"]
        };
        let homeCmp = "";
        if(this.state.homeMounted) {
            homeCmp =   (
                <Home2 
                    name={"Max"} 
                    initialAge={27} 
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset1">
                        <Home name={"Max"} age={27} user={user}>
                            <p>This is a child paragraph!</p>
                        </Home>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset1">
                        <ReactSwiper/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset1">
                        <MuiThemeProvider>
                            <MyButton/>
                        </MuiThemeProvider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset1">
                        <MuiThemeProvider>
                            <MyDialog/>
                        </MuiThemeProvider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset1">
                        <MyJqueryUIDialog/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset1">
                        <MuiThemeProvider>
                            <MyRadioButton/>
                        </MuiThemeProvider>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));