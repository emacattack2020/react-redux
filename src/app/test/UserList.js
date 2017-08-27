import React from "react";
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { getUserDetails } from "./action";
import UserDetails from "./UserDetails";
import LoadingSpinner from "./LoadingSpinner";

class UserList extends React.Component {
    isUserSelected(id) {
        return this.props.names.selectedUser == id
    }
    renderUserList(users) {
        if(this.props.names.isNamesFetching) {
            return (
                <LoadingSpinner />
            )
        }
        if(this.props.names.names) {
            return users.map((user) => {
                return ( 
                    <li key={user.id} onClick={() => this.props.getUserDetails(user.id) }>
                        {user.id} - {user.name} - {user.email}
                        {this.isUserSelected(user.id) && <UserDetails />}
                    </li>
                )
            });
        }
    }
    render(){
        return (
            <ul>
                {this.renderUserList(this.props.names.names)}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        names: state.namesReducer
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetails: (id) => {
            dispatch(getUserDetails(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);