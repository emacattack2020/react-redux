import React from "react";

//Stateless Component 
export const SimpleStateLink = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <ul className="nav navbar-nav">
                    <li><a href="#">{props.homeLink}</a></li>
                </ul>
            </div>
        </nav>
    );
};