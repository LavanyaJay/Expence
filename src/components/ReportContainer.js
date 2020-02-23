import React, { Component } from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";
import { loadChartData } from "../actions/chart";
import { loadCategory } from "../actions/category";
import SelectInput from "./styledcomponents/SelectInput";
import Button from "./styledcomponents/Button";

class ReportContainer extends Component {
  state = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: []
      }
    ],
    selectedOption: ""
  };
  componentDidMount() {
    if (this.props.category.length === 0) {
      this.props.loadCategory();
    }
  }
  getdata = () => {
    const chartCat = this.props.chart.map(item => item.category_id);
    var catNames = [];
    for (let i = 0; i < chartCat.length; i++) {
      for (let j = 0; j < this.props.category.length; j++) {
        if (chartCat[i] === this.props.category[j].id) {
          catNames.push(this.props.category[j].ac_category);
          break;
        }
      }
    }

    const chartData = this.props.chart.map(item => item.sum);
    const bg = ["red", "blue", "green", "orange", "yellow", "pink"];
    const ds = [{ data: chartData, backgroundColor: bg }];
    const data = { labels: catNames, datasets: ds };
    return data;
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onClickHandler = e => {
    this.props.loadChartData(this.state.selectedOption);
  };
  render() {
    const data = this.getdata();

    return (
      <div>
        <SelectInput
          value={this.state.selectedOption}
          onChange={this.onChangeHandler}
        />
        <Button onClick={this.onClickHandler} />

        {data.labels.length > 0 && (
          <div>{<Pie data={data} height={120} />}</div>
        )}
        {data.labels.length === 0 && <div>No report found</div>}
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    chart: reduxState.chart,
    category: reduxState.category
  };
};

export default connect(mapStateToProps, {
  loadChartData,
  loadCategory
})(ReportContainer);
