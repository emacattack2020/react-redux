import React from "react";
import {connect} from "react-redux";

import User from "./User";

class UserList extends React.Component {
    render(){
        if(Object.getOwnPropertyNames(this.props.users).length === 0){
            return (<div></div>)
        } else {
            console.log(this.props.users.users);
        }
        var userNodes = this.props.users.users.map(function(user){
            return (
                <User name={user.name} email={user.email} id={user.id} />
            )
        })
        return (
            <div>
                <h1>Users</h1>
                {userNodes}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.ajaxUsers
    };
}
export default connect(mapStateToProps, null)(UserList);