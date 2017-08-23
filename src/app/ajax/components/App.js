import React from "react";
import {connect} from "react-redux";

import UserList from "./UserList";

import {fetchUsers} from "../actions/userActions";
import Layout from '../pages/Layout';

// @connect((store) => {
//     return {
//         users: store.users.users
//     }
// })
//https://github.com/aadshalshihry/react-redux
//https://jsonplaceholder.typicode.com/
class App extends React.Component {
    componentWillMount(){
        this.props.dispatch(fetchUsers());
    }

    render(){
        return (
            <div>
                <Layout />
                My App Component
                <UserList/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.ajaxUsers
    };
}
export default connect(mapStateToProps, null)(App);