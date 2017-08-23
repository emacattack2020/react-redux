import React from "react";
import { Collapse, Button } from 'react-bootstrap';
import Promotions from "./Promotions";
//https://react-bootstrap.github.io/components.html#utilities
//https://github.com/nkbt/react-collapse
//https://www.npmjs.com/package/react-collapse
export class CollapseExample extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }
 
   renderButton() {
        if(!this.state.open) {
            return (
                <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                  See more promotions
                </Button>
            );
        }
   }

  render() {
    return (
      <div>
        <Promotions start="0" end="1"/>
        {this.renderButton()}
        <Collapse in={this.state.open}>
            <div>
                <Promotions start="2"/>
            </div>
        </Collapse>
      </div>
    );
  }
}