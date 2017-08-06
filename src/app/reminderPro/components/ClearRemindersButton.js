import React from "react";

export class ClearRemindersButton extends React.Component {
    render() {
        return (
            <div 
                className="btn btn-danger"
                onClick={ () => this.props.clearReminders()}>
                Clear Reminders
            </div>
        );
    }
}