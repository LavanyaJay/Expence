import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import InputForm from "./InputForm";
import Tracker from "./Tracker";
import { addAccount } from "../actions/account";
import NetIncomePerDay from "./NetIncomePerDay";
class TrackerContainer extends Component {
  date = moment(this.props.match.params.date);
  state = {
    type: "",
    desc: "",
    amount: "",
    accountAdded: false
  };

  onChange = e => {
    console.log("onChange");
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();
    this.props.addAccount(this.state.type, this.state.desc, this.state.amount);
    this.setState({ type: "", desc: "", amount: "" });
  };

  render() {
    return (
      <div className="main">
        <NetIncomePerDay
          date={this.date}
          totalInc={this.props.totalInc}
          totalExp={this.props.totalExp}
        />
        <div>
          <InputForm
            values={this.state.account}
            onChange={this.onChange}
            onClick={this.onClick}
          />
          <Tracker accounts={this.props.accounts} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    accounts: reduxState.accounts.accounts,
    totalInc: reduxState.accounts.totalInc,
    totalExp: reduxState.accounts.totalExp
  };
};

export default connect(mapStateToProps, { addAccount })(TrackerContainer);
