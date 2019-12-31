const colorChoice = {
  color: [
    "0,0,0",
    "11,156,49",
    "255,255,0",
    "153,51,102",
    "0,0,225",
    "255,0,0"
  ],
  fillOpacity: "0.3",
  lineOpacity: "0.1",
  hoverOpacity: "0.9"
};

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

export const data = {
  userName: "Customer's Name...",
  /*
  labels: [
    { id: 1, name: "branch1" },
    { id: 2, name: "branch2" },
    { id: 3, name: "branch3" },
    { id: 4, name: "branch4" },
    { id: 5, name: "branch5" },
    { id: 6, name: "branch6" }
  ],
  */
  labels: ["branch1", "branch2", "branch3", "branch4", "branch5", "branch6"],
  datasets: [
    {
      id: 1,
      label: "DataSet1", //dataset label, NOT each branch
      data: [93, 66, 55, 49, 93, 18], //data that gets graphed
      backgroundColor: `rgba(${colorChoice.color[1]},${colorChoice.fillOpacity})`,
      borderColor: `rgba(${colorChoice.color[1]},${colorChoice.lineOpacity})`,
      hoverBackgroundColor: `rgba(${colorChoice.color[1]},${colorChoice.hoverOpacity})`
    },
    {
      id: 2,
      label: "DataSet2", //dataset label, NOT each branch
      data: [33, 45, 66, 97, 12, 33], //data that gets graphed
      backgroundColor: `rgba(${colorChoice.color[2]},${colorChoice.fillOpacity})`,
      borderColor: `rgba(${colorChoice.color[2]},${colorChoice.lineOpacity})`,
      hoverBackgroundColor: `rgba(${colorChoice.color[2]},${colorChoice.hoverOpacity})`
    },
    {
      id: 3,
      label: "DataSet3", //dataset label, NOT each branch
      data: [12, 51, 33, 12, 77, 3], //data that gets graphed
      backgroundColor: `rgba(${colorChoice.color[3]},${colorChoice.fillOpacity})`,
      borderColor: `rgba(${colorChoice.color[3]},${colorChoice.lineOpacity})`,
      hoverBackgroundColor: `rgba(${colorChoice.color[3]},${colorChoice.hoverOpacity})`
    }
  ]
};
