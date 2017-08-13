import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { Button } from 'react-bootstrap';
import { completeGoalRef } from '../../firebase';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title})
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  renderCompletedGoalList() {
    return (
        this.props.completeGoals.map((completeGoal, index) => {
          const { title, email } = completeGoal;
          return (
            <div key={index}>
              <strong>{title}</strong> completed by <em>{email}</em>
            </div>
          )
        })
      )
  }

  render() {
    return (
      <div>
        {this.renderCompletedGoalList()}
        <Button onClick={() => this.clearCompleted()} bsStyle="primary">Clear All</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);