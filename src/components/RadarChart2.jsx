import React, { useEffect } from "react";
import { Radar } from "react-chartjs-2";
import { connect } from "react-redux";

import { data } from "../dummycomps/Data";
import { getData } from "../actions/actions";

import "../css/Data.css";

console.log(data);

const pointStyleOptions = [
  "circle",
  "cross",
  "crossRot",
  "dash",
  "line",
  "rect",
  "rectRound",
  "rectRot",
  "star",
  "triangle"
];

const lineStyleOptions = ["round", "miter", "bevel"];

const chartStyling = {
  //Adding this in here for styling reference mainly
  //
  label: "", //string; dataset labels that are displayed
  order: "", //string; drawing order of dataset
  //point styling
  pointBackgroundColor: "", //color for points
  pointBorderColor: "", //border color for points
  pointBorderWidth: "", //width of point border
  pointHitRadius: "", //pixel size of non-displayed points
  pointRadius: "", //radius of point
  pointRotation: "", //rotation of point (?)
  pointStyle: "", //style of point
  //line styling
  backgroundColor: "", //line fill
  borderCapStyle: "", //cap style of line
  borderColor: "", //line color
  borderDash: "([])", //length of dashes: [] = solid
  borderDashOffset: "", //# to represent an indent
  borderJoinStyle: "", //how the lines bend at connection
  borderWidth: "", //line width
  fill: "", //boolean, fill area under the line
  lineTension: "", //Bezier curve of lines
  spanGaps: "", //when Nan data, true connects dots, false makes a break.
  //hover effects, mostly applied to the data points
  hoverBackgroundColor: "",
  hoverBorderCapStyle: "",
  hoverBorderColor: "",
  hoverBorderDash: "",
  hoverBorderDashOffset: "",
  hoverBorderJoinStyle: "",
  hoverBorderWidth: "",
  pointHoverBackgroundColor: "",
  pointHoverBorderColor: "",
  pointHoverBorderWidth: "",
  pointHoverRadius: ""
  //Colors = rgba(red,green,blue,opacity)
};

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

// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// console.log("screen width:", w);

/*
const data = {
  userName: "Customer's Name...",
  labels: ["branch1", "branch2", "branch3", "branch4", "branch5", "branch6"],
  datasets: [
    {
      label: "DataSet1", //dataset label, NOT each branch
      data: [93, 66, 55, 49, 93, 18], //data that gets graphed
      backgroundColor: `rgba(${colorChoice.color[1]},${colorChoice.fillOpacity})`,
      borderColor: `rgba(${colorChoice.color[1]},${colorChoice.lineOpacity})`,
      // pointBorderColor: colorChoice[1],
      // pointHoverBackgroundColor: colorChoice[1],
      // pointHoverBorderColor: colorChoice[1]
      hoverBackgroundColor: `rgba(${colorChoice.color[1]},${colorChoice.hoverOpacity})`,
      hoverBorderWidth: "200px",
      highlightEnabled: ""
    },
    {
      label: "DataSet1", //dataset label, NOT each branch
      data: [33, 45, 66, 97, 12, 33], //data that gets graphed
      backgroundColor: `rgba(${colorChoice.color[2]},${colorChoice.fillOpacity})`,
      borderColor: `rgba(${colorChoice.color[2]},${colorChoice.lineOpacity})`,
      // pointBorderColor: colorChoice[2],
      // pointHoverBackgroundColor: colorChoice[2],
      // pointHoverBorderColor: colorChoice[2]
      hoverBackgroundColor: `rgba(${colorChoice.color[2]},${colorChoice.hoverOpacity})`
    }
  ]
};
*/

const RadarChart2 = props => {
  // useEffect(() => {
  //   var w = Math.max(
  //     document.documentElement.clientWidth,
  //     window.innerWidth || 0
  //   );
  //   console.log("screen width:", w);
  // });

  return (
    <div className="chartField">
      <Radar
        data={data}
        options={{
          title: {
            display: true,
            text: data.userName,
            fontSize: 25
          },
          legend: {
            display: true,
            position: "right",
            labels: {
              fontSize: 10
            }
          },
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              bottom: 0,
              top: 0
            }
          }
        }}
      />
    </div>
  );
};

// export default RadarChart2;
const mapStateToProps = state => ({});

export default connect(mapStateToProps, { getData })(RadarChart2);
