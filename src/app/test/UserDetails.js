import React from "react";
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";

class UserDetails extends React.Component {
    render(){
        if(this.props.names.isFetching) {
            return (
                <LoadingSpinner />
            )
        }
        return (
            <ul>
                <li>{this.props.names.details.username}</li>
                <li>{this.props.names.details.phone}</li>
                <li>{this.props.names.details.website}</li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        names: state.namesReducer
    };
}

export default connect(mapStateToProps, null)(UserDetails);