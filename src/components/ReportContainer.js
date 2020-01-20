import React, { Component } from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";
import { loadChartData } from "../actions/chart";
import { loadCategory } from "../actions/category";

class ReportContainer extends Component {
  state = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: []
      }
    ]
  };
  componentDidMount() {
    this.props.loadChartData();
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
  render() {
    const data = this.getdata();

    if (data.labels.length > 0) {
      return (
        <div>
          <Pie data={data} height="75%" />
        </div>
      );
    } else {
      return <div>No report found</div>;
    }
  }
}
const mapStateToProps = reduxState => {
  console.log("redux: ", reduxState);
  return {
    chart: reduxState.chart,
    category: reduxState.category
  };
};

export default connect(mapStateToProps, {
  loadChartData,
  loadCategory
})(ReportContainer);
