import React from "react";
// 
export class Home extends React.Component {
    render() {
        console.log(this.props);
        let content = "";
        if (true) {
            content = <p>Hello!</p>
        }
        return (
            <div>
                <p>In a new Component! PROPERTY PASSING BETWEEN COMPONENTS</p>
                {content}
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p>User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map( (hobby, index) => <li key={index}>{hobby}</li>) }
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
// Enforce types get used correctly
Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
}