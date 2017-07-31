import React from "react";

export class Home2 extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout( () => {
            this.setState({
                status: 1
            })
        }, 3000)
        console.log("Constructor");
    }
    componentWillMount() {
        console.log("Component will mount");
    }
    componentDidMount() {
        console.log("Component did mount");
    }
    componentWillReciveProps(nextProps) {
        console.log("Component will receive props", nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update", nextProps, nextState);
        // if(nextState.status === 1) {
        //     return false;
        // }
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }
    componentWillUnmount() {
        console.log("Component will unmount");
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        }); //rerenders UI
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        })
    }
    render() {
        return (
            <div>
                <p>In a new Component - SIMPLE STATE MANAGEMENT!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older bind this!</button>
                <button onClick={ () => this.onMakeOlder() } className="btn btn-primary">Make me older ES6!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}
// Enforce types get used correctly
Home2.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func
}