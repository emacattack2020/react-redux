import React from "react";

export class AddReminderButton extends React.Component {
    render() {
        return (
            <button 
                type="button"
                className="btn btn-success"
                onClick={ () => this.props.addReminder()}>
                Add Reminder
            </button>
        );
    }
}