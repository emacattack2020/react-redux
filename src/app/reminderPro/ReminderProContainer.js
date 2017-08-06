import React from "react";
import { connect } from'react-redux';
import { addReminder, deleteReminder, clearReminders } from './actions';
import { Reminders } from "./components/Reminders.js";
import { ClearRemindersButton } from "./components/ClearRemindersButton";
import { AddReminderButton } from "./components/AddReminderButton";

class ReminderProContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {

        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderStaticHtml() {
        return (
            <h1>{this.state.text}</h1>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input 
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.setState({text: event.target.value})}
                        />
                        <input 
                            className="form-control"
                            type="datetime-local"
                            onChange={event => this.setState( {dueDate: event.target.value})}
                        />

                    </div>
                    <AddReminderButton addReminder={this.addReminder.bind(this)} />
                </div>
                <Reminders deleteReminder={this.props.deleteReminder} myProps={this.props} />
                { this.renderStaticHtml() }
                <ClearRemindersButton clearReminders={this.props.clearReminders} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reminders: state.reminderPro
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addReminder: (text, dueDate) => {
            dispatch(addReminder(text, dueDate));
        },
        deleteReminder: (id) => {
            dispatch(deleteReminder(id));
        },
        clearReminders: () => {
            dispatch(clearReminders());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderProContainer);