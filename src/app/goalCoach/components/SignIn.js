import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Form, FormGroup, FormControl, Alert } from 'react-bootstrap';
import { firebaseApp } from '../../firebase';

class SignIn extends Component {
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

    signIn() {
      console.log('this.state', this.state);
      const { email, password } = this.state;
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          this.setState({error})
        })
    }

    renderAlertMessage() {
        if(this.state.error.message) {
            return <Alert bsStyle="danger">{this.state.error.message}</Alert>
        }
    }
    render() {
        return (
            <Form inline style={{margin: '5%'}}>
                <h2>Sign In</h2>
                <FormGroup
                  controlId="formBasicText"
                >
                    <FormControl
                        type="text"
                        style={{marginRight: '5px'}}
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <FormControl.Feedback />
                    <FormControl
                        type="password"
                        style={{marginRight: '5px'}}
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <Button onClick={() => this.signIn()} bsStyle="primary">Sign In</Button>
                {this.renderAlertMessage()}
                <div><Link to={'/goalCoach/signup'}>Sign up instead</Link></div>
            </Form>
        )
    }
}
export default SignIn;