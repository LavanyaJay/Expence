import React, { Component } from "react";
import Calendar from "react-calendar";
import { Button } from "react-bootstrap";

export default class CalendarContainer extends Component {
  state = {
    date: new Date()
  };
  onChange = date => {
    console.log("date:", date);
    this.setState({ date });
  };
  onClickHandler = () => {
    console.log("state date:", this.state.date);
    this.props.history.push(`/day/${this.state.date}`);
  };
  onClickReportHandler = () => {
    this.props.history.push(`/charts`);
  };

  render() {
    return (
      <div class="home">
        <div>
          <Calendar
            className="calendar"
            onChange={this.onChange}
            value={this.state.date}
          />
          <Button variant="primary" onClick={this.onClickHandler}>
            Track
          </Button>
        </div>
        <Button className="button" onClick={this.onClickReportHandler}>
          Run Report
        </Button>
      </div>
    );
  }
}
