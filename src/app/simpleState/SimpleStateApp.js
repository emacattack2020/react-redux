import React from "react";
import { render } from "react-dom";
import { SimpleState } from "./SimpleState";
import { SimpleStateLink } from "./SimpleStateLink";

export class SimpleStateApp extends React.Component {
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
                <SimpleState 
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
                        <SimpleStateLink homeLink={this.state.homeLink}/>
                    </div>
                </div>
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