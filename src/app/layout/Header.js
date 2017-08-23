import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/reduxStateExample"} activeStyle={{color: "red"}}>Redux State Example</Link></li>
                        <li><Link to={"/collapseExample"} activeStyle={{color: "red"}}>Collapse</Link></li>
                        <li><Link to={"/simpleStateApp"} activeStyle={{color: "red"}}>Simple State App</Link></li>
                        <li><Link to={"/reminderProAPp"} activeStyle={{color: "red"}}>Reminder Pro App</Link></li>
                        <li><Link to={"/boston"} activeStyle={{color: "red"}}>Boston</Link></li>
                        <li><Link to={"/goalCoach/app"} activeStyle={{color: "red"}}>Goal Coach</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};