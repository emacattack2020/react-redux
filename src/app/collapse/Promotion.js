import React from "react";
import { Well } from 'react-bootstrap';
export default class Promotion extends React.Component {
    constructor(props) {
      super();

      this.state = {
          promotionText: props.text
      };
    }
    render() {
        return (
            <Well tabIndex="0">
                {this.state.promotionText}
            </Well>
        );
    }
}