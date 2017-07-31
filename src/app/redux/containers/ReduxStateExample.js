import React from "react";
import { connect } from "react-redux";
import { setName, setTempName } from "../actions/userActions";
import { User } from '../components/reduxState/User';
import { Main } from '../components/reduxState/Main';

class ReduxStateExample extends React.Component {
    render() {
        return (
            <div>
                <Main 
                    changeUsername={() => this.props.setName(this.props.user.tempName) }
                    changeTempName={(event) => this.props.setTempName(event.target.value)}
                    username={this.props.user.name}
                />
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
         setTempName: (name) => {
            dispatch(setTempName(name));
        },       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxStateExample);