import React, { Component } from "react";
import moment from "moment";
export default class TrackerContainer extends Component {
  date = moment(this.props.match.params.date);
  render() {
    return <div>Tracking for {this.date.format("YYYY-MM-DD")} </div>;
  }
}
