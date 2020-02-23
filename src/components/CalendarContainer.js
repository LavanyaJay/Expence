import React, { Component } from "react";
import Calendar from "react-calendar";
import { Button } from "react-bootstrap";

export default class CalendarContainer extends Component {
  state = {
    date: new Date()
  };
  onChange = date => {
    this.setState({ date });
  };
  onClickHandler = () => {
    this.props.history.push(`/day/${this.state.date}`);
  };
  onClickReportHandler = () => {
    this.props.history.push(`/charts`);
  };

  render() {
    return (
      <div className="home">
        <div>
          <Calendar
            className="calendar"
            onChange={this.onChange}
            value={this.state.date}
            onClickDay={this.onClickHandler}
          />
        </div>
        <Button className="button" onClick={this.onClickReportHandler}>
          Run Report
        </Button>
      </div>
    );
  }
}
