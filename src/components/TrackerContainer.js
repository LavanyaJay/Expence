import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import InputForm from "./InputForm";
import Tracker from "./Tracker";
import { addAccount, loadAccount, delAccount } from "../actions/account";
import { loadCategory } from "../actions/category";

class TrackerContainer extends Component {
  state = {
    category: "",
    remark: "",
    amount: ""
  };

  componentDidMount() {
    this.props.loadCategory();

    var date1 = new Date(this.props.match.params.date);
    let dateNew = moment(date1).format("YYYY-MM-DD");

    this.props.loadAccount(dateNew);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.addAccount(
      this.state.category,
      this.state.remark,
      this.state.amount,
      moment(new Date(this.props.match.params.date)).format("YYYY-MM-DD")
    );
    this.setState({ category: "", remark: "", amount: "" });
  };

  onDelete = id => {
    this.props.delAccount(id);
  };

  render() {
    return (
      <div className="main">
        <div>
          <InputForm
            values={this.state}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            category={this.props.category}
          />
          <Tracker
            accounts={this.props.accounts}
            onDelete={this.onDelete}
            category={this.state.category}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log("cate", reduxState);
  return {
    accounts: reduxState.accounts,

    category: reduxState.category
  };
};

export default connect(mapStateToProps, {
  addAccount,
  loadCategory,
  loadAccount,
  delAccount
})(TrackerContainer);
