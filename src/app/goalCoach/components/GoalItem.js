import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { completeGoalRef, goalRef } from '../../firebase';

class GoalItem extends Component {
  completeGoal() {
    // add to complete goals on the database
    // remove this goal from the goals reference
    const { email } = this.props;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    console.log('email', email, 'title', title);
    completeGoalRef.push({email, title});
  }

  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <Button onClick={() => this.completeGoal()} bsStyle="primary" bsSize="small">Complete</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { email } = state.goalCoachReducer;
  return {
    email
  }
}

export default connect(mapStateToProps, null)(GoalItem);