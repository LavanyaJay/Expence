import React, { Component } from "react";
import Calendar from "react-calendar";

export default class CalendarContainer extends Component {
  state = {
    date: new Date()
  };
  onChange = date => this.setState({ date });
  render() {
    return (
      <div>
        <Calendar
          className="calendar"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
