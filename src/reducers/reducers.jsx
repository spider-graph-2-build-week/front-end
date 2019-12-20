// reducers.jsx for being explicit in instructions
import {
  GLOBAL_VAR_1,
  GLOBAL_VAR_2,
  GLOBAL_VAR_3,
  //some more names
  HANDLECHANGE,
  GETDATASTART,
  GETDATASUCCESSSS,
  GETDATAFAIL,
  LOGINSTART,
  LOGINSUCCESS,
  LOGINFAIL,
  REGISTERSTART,
  REGISTERSUCCESS,
  REGISTERFAIL
} from "../actions/actions";

const initialState = {
  error: "",
  //logging in
  isLoggingIn: false,
  credentials: [],
  token: "",
  //getting data from API or similar
  isFetching: false,
  //data storage
  //****CHANGE TO DESCRIPTIVE NAMES******
  chartData: {
    labels: [],
    datasets: [{ label: "", data: [] }]
  },
  is_Array1: [],
  is_Object1: {},
  //adding data
  isAdding: false,
  newData: {
    key1: "",
    key2: "",
    key3: ""
  },
  //editing data
  isEditing: false,
  initialData: {
    key1: "",
    key2: "",
    key3: ""
  },
  dataToChange: {}
  //other categories...
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GLOBAL_VAR_1:
      return {
        ...state
      };
    case GLOBAL_VAR_2:
      return {
        ...state
      };
    case GLOBAL_VAR_3:
      return {
        ...state
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
    //===Handle Change=====
    case HANDLECHANGE:
      // console.log(payload.target);
      return {
        ...state,
        [payload.form]: {
          ...state[payload.form],
          [payload.target.name]: payload.target.value
        }
      };
    default:
      return state;
  }
};
