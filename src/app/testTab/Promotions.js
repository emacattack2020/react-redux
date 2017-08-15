import React from "react";
import { Well } from 'react-bootstrap';
import Promotion from "./Promotion";
export default class Promotions extends React.Component {
    constructor(props) {
        super();

        this.state = {
            promotions: ['promotion 1', 'promotion 2', 'promotion 3', 'promotion 4', 'promotion 5', 'promotion 6']
        };
    }
    renderPromotions(start, end) {
        let promotions = [];
        let arrayEnd = end ? end : this.state.promotions.length - 1
        for (let i = start; i <= arrayEnd; i++) { 
            promotions.push(<Promotion key={i} text={this.state.promotions[i]}/>);
        }
        return (
            promotions
        );
    }
    render() {
        return (
            <div>
                {this.renderPromotions(this.props.start, this.props.end)}
            </div>
        );
    }
}