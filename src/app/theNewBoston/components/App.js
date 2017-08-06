import React from 'react';
import UserList from '../containers/user-list.js';
import "../../../css/boston.scss";
import UserDetail from "../containers/user-detail";

const App = (props) => {
    return (
        <div>
            <h2>Username List:</h2>
            <UserList />
            <hr/>
            <h2>User Details:</h2>
            <UserDetail />
        </div>
    )
}

export default App;

