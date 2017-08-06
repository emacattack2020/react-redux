import React from "react";
import { connect } from'react-redux';
import { addReminder, deleteReminder, clearReminders } from './actions';
import { Reminders } from "./components/Reminders.js";
import { ClearRemindersButton } from "./components/ClearRemindersButton";
import { AddReminderButton } from "./components/AddReminderButton";
import InputFormGroup from "./components/InputFormGroup";

class ReminderProContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    updateReminderText(text) {
        this.setState(text);
    }

    updateDueDate(dueDate) {
        this.setState(dueDate);
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
                <div className="title">Reminder Pro</div>
                <div className="form-inline reminder-form">
                    <InputFormGroup 
                        updateReminderText={this.updateReminderText.bind(this)}
                        updateDueDate={this.updateDueDate.bind(this)} />
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