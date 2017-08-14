import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, FormControl, Alert } from 'react-bootstrap';
import { goalRef } from '../../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this);
    const { title } = this.state;
    const { email } = this.props;
    goalRef.push({email, title});
  }

  render() {
    return (
        <Form inline>
            <FormGroup controlId="formBasicText">
                <FormControl
                    type="text"
                    style={{marginRight: '5px'}}
                    placeholder="Add a goal"
                    onChange={event => this.setState({title: event.target.value})}
                />
            </FormGroup>
            <Button onClick={() => this.addGoal()} bsStyle="success">Submit</Button>
        </Form>
    );
  }
}

function mapStateToProps(state) {
  const { email } = state.goalCoachReducer;
  return {
    email
  }
}

export default connect(mapStateToProps, null)(AddGoal);