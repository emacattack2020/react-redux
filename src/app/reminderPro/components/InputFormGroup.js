import React from "react";

export default class InputFormGroup extends React.Component {
    render() {
        return (
            <div className="form-group">
                <input 
                    className="form-control"
                    placeholder="I have to..."
                    onChange={event => this.props.updateReminderText({text: event.target.value})}
                />
                <input 
                    className="form-control"
                    type="datetime-local"
                    onChange={event => this.props.updateDueDate( {dueDate: event.target.value})}
                />
            </div>
        );
    }
}