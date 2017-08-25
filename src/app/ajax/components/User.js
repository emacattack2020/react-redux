import React from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions/userActions";

class User extends React.Component {
    getUserDetails() {
        console.log('USER_COMPONENT_DATA', this.props.fetchUser(this.props.id));
    }
    render(){
        return (
            <div onClick={() => this.getUserDetails()}>
                {this.props.id} - {this.props.name} - {this.props.email}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => {
            dispatch(fetchUser(id));
        },
    };
};

export default connect(null, mapDispatchToProps)(User);