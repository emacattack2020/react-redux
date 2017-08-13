import React from "react";
import { Link } from 'react-router';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { firebaseApp } from '../../firebase';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }
  getValidationState() {
    const length = this.state.password.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <FormControl
              type="text"
              style={{marginRight: '5px'}}
              value={this.state.value}
              placeholder="email"
              onChange={event => this.setState({email: event.target.value})}
            />
            <FormControl.Feedback />
            <FormControl
              type="password"
              style={{marginRight: '5px'}}
              value={this.state.value}
              placeholder="password"
              onChange={event => this.setState({password: event.target.value})}
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button onClick={() => this.signUp()} bsStyle="primary">Sign Up</Button>
        <div>{this.state.error.message}</div>
        <div><Link to={'/goalCoach/signin'}>Already a user? Sign in instead</Link></div>
      </div>
    )
  }
}