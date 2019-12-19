import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

const colorChoice = [
  "black",
  "rgba(11,156,49,0.2)",
  "rgba(255,255,0,0.5)",
  "grey",
  "blue",
  "red"
];

const options = {
  title: {
    display: true,
    text: "Some Kind of Appropriate Title",
    fontSize: 25
  },
  legend: {
    display: true,
    position: "right"
  }
};

const data = {
  labels: ["branch1", "branch2", "branch3", "branch4", "branch5", "branch6"],
  datasets: [
    {
      label: "DataSet1",
      data: [93, 66, 55, 49, 93, 18],
      backgroundColor: colorChoice[1],
      borderColor: colorChoice[1],
      pointBorderColor: colorChoice[1],
      pointHoverBackgroundColor: colorChoice[1],
      pointHoverBorderColor: colorChoice[1]
    },
    {
      label: "DataSet1",
      data: [33, 45, 66, 97, 12, 33],
      backgroundColor: colorChoice[2],
      borderColor: colorChoice[2],
      pointBorderColor: colorChoice[2],
      pointHoverBackgroundColor: colorChoice[2],
      pointHoverBorderColor: colorChoice[2]
    }
  ]
};

class RadarChart2 extends Component {
  render() {
    console.log("data:", data);
    return (
      <div className="chart">
        <Radar
          data={data}
          options={{
            title: {
              display: true,
              text: "something",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}

export default RadarChart2;
