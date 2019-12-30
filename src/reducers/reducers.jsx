// reducers.jsx for being explicit in instructions
import {
  //logging in to api...
  LOGINSTART,
  LOGINSUCCESS,
  LOGINFAIL,
  //getting data...
  GETDATASTART,
  GETDATASUCCESS,
  GETDATAFAIL,
  //registering to api...
  REGISTERSTART,
  REGISTERSUCCESS,
  REGISTERFAIL,
  //edit data from api...
  EDITDATASTART,
  EDITDATASUCCESS,
  EDITDATAFAIL,
  //add data to api...
  ADDDATASTART,
  ADDDATASUCCESS,
  ADDDATAFAIL,
  ADDBRANCHSTART,
  ADDBRANCHSUCCESS,
  ADDBRANCHFAIL,
  //some more names
  HANDLECHANGE,
  LOGOUT,
  DELETEUNIT,
  CANCELEDIT
} from "../actions/actions";

const initialState = {
  error: "",
  //logging in
  isLoggingIn: false,
  isRegistering: false,
  credentials: [],
  token: "",
  //getting data from API or similar
  isFetching: false,
  //data storage
  chartData: {
    labels: [],
    datasets: [{ id: "", label: "", data: [] }]
  },
  // is_Array1: [],
  // is_Object1: {},
  //adding data
  isAdding: false,
  newData: {
    label: "",
    data: []
  },
  isNewBranch: false,
  newBranch: [],
  //editing data
  isEditing: false,
  initialData: {
    data: []
  },
  dataToEdit: {},
  //other categories...
  reFetch: false
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //==========Registration Functions========
    case REGISTERSTART:
      console.log("REGISTER connect to api....");
      return {
        ...state,
        error: "",
        isRegistering: true
      };
    case REGISTERSUCCESS:
      console.log("REGISTER success!");
      return {
        ...state,
        error: "",
        isRegistering: false,
        token: payload
      };
    case REGISTERFAIL:
      console.log("REGISTER failed :(");
      return {
        ...state,
        error: payload,
        isRegistering: false
      };
    //======Login Functions========
    case LOGINSTART:
      console.log("logging in to api....");
      return {
        ...state,
        error: "",
        isLoggingIn: true
      };
    case LOGINSUCCESS:
      console.log("login success!");
      return {
        ...state,
        error: "",
        isLoggingIn: false,
        token: payload
      };
    case LOGINFAIL:
      console.log("login failed :(");
      return {
        ...state,
        error: payload,
        isLoggingIn: false
      };
    //=====Getting data from api=====
    case GETDATASTART:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case GETDATASUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        chartData: payload
      };
    case GETDATAFAIL:
      return {
        ...state,
        error: payload,
        isFetching: false
      };

    //=====Adding data to api======
    case ADDDATASTART:
      return {
        ...state,
        isAdding: true,
        err: ""
      };
    case ADDDATASUCCESS:
      return {
        ...state,
        err: "",
        isAdding: false,
        reFetch: !state.reFetch,
        newData: {
          label: "",
          data: []
        }
      };
    case ADDDATAFAIL:
      return {
        ...state,
        isAdding: false,
        err: payload
      };
    case ADDBRANCHSTART:
      return {
        ...state,
        isAdding: true,
        err: ""
      };
    case ADDBRANCHSUCCESS:
      return {
        ...state,
        err: "",
        isAdding: false,
        reFetch: !state.reFetch,
        newBranch: []
      };
    case ADDBRANCHFAIL:
      return {
        ...state,
        isAdding: false,
        err: payload
      };
    //======editing data from api======
    case EDITDATASTART:
      return {
        ...state,
        isEditing: true,
        err: "",
        dataToEdit: state.chartData.datasets.find(
          dataset => `${dataset.id}` === `${payload}`
        )
      };
    case EDITDATASUCCESS:
      return {
        ...state,
        err: "",
        isEditing: false,
        dataToEdit: {},
        reFetch: !state.reFetch
      };
    case EDITDATAFAIL:
      return {
        ...state,
        isEditing: false,
        err: "",
        dataToEdit: {}
      };
    //===Handle Change=====
    case HANDLECHANGE:
      console.log(payload.target.value);
      console.log(payload.form);
      return {
        ...state,
        [payload.form]: {
          ...state[payload.form],
          [payload.target.name]: payload.target.value
        }
      };
    case CANCELEDIT:
      return {
        ...state,
        isEditing: false,
        dataToEdit: {},
        error: ""
      };
    case DELETEUNIT:
      console.log(state.reFetch);
      return {
        ...state,
        reFetch: !state.reFetch
      };
    case LOGOUT:
      return {
        ...state,
        error: "",
        //logging in
        isLoggingIn: false,
        isRegistering: false,
        credentials: [],
        token: "",
        //getting data from API or similar
        isFetching: false,
        //data storage
        chartData: {
          labels: [],
          datasets: [{ id: "", label: "", data: [] }]
        },
        // is_Array1: [],
        // is_Object1: {},
        //adding data
        isAdding: false,
        newData: {
          label: "",
          data: []
        },
        isNewBranch: false,
        newBranch: [],
        //editing data
        isEditing: false,
        initialData: {
          data: []
        },
        dataToEdit: {},
        //other categories...
        reFetch: false
      };
    default:
      return state;
  }
};
