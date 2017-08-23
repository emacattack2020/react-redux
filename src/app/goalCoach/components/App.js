import React from "react";
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import { Button } from 'react-bootstrap';
import { firebaseApp } from '../../firebase';

export default class App extends React.Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <h4>Complete Goals</h4>
        <CompleteGoalList />
        <hr />
        <Button onClick={() => this.signOut()} bsStyle="danger">Sign Out</Button>
      </div>
    )
  }
}



// function mapStateToProps(state) {
//   console.log('state', state);
//   return {}
// }

// export default connect(mapStateToProps, null)(App);
