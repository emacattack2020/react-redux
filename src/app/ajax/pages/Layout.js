'use strict';
import React from "react";
import { Link } from 'react-router';

export default class Layout extends React.Component {
  navigate() {

    this.props.history.pushState(null, "/");
    console.log(this.props);
  }
  render(){
    return (

      <div>
        <h1>KillerNews.com</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="archives">archives</Link>
        <br/>
        <Link to="settings">settings</Link>
        <br/>
        {this.props.children}
        <button onClick={this.navigate.bind(this)}>Home</button>
      </div>
    );
  }
}