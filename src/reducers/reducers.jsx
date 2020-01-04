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
  HANDLECHANGE_NEWBRANCH,
  HANDLENEWDATASET,
  LOGOUT,
  DELETEUNIT,
  CANCELEDIT
} from "../actions/actions";

const initialState = {
  error: "",
  //logging in
  isLoggingIn: false,
  isRegistering: false,
  didRegister: false,
  credentials: [],
  token: "",
  //getting data from API or similar
  isFetching: false,
  //data storage
  userData: {
    userName: "",
    labels: [],
    datasets: [{ id: "", label: "", data: [] }]
  },
  //adding data
  isAdding: false,
  newData: {
    //new dataset
    label: "",
    data: []
  },
  isNewBranch: false,
  newBranch: "",
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
        isRegistering: true,
        didRegister: false
      };
    case REGISTERSUCCESS:
      console.log("REGISTER success! token:", payload);
      return {
        ...state,
        error: "",
        isRegistering: false,
        token: payload,
        didRegister: true
      };
    case REGISTERFAIL:
      console.log("REGISTER failed :(");
      return {
        ...state,
        error: payload,
        isRegistering: false,
        didRegister: false
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
      console.log("login success!", payload);
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
      console.log(
        "reducers>GETDATASUCCESS>payload, userData, newData:\n",
        payload,
        "\n",
        state.userData,
        "\n",
        state.newData
      );
      return {
        ...state,
        error: "",
        isFetching: false,
        userData: payload
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
      let newDataId = state.userData.datasets.length.toString();
      console.log(
        `ADDDATASUCCESS>\n`,
        `newDataId:${newDataId}`,
        `payload: ${payload}`
      );
      //
      let newDataInput = {
        id: newDataId,
        label: payload.label,
        data: payload.data,
        backgroundColor: "black",
        borderColor: "black"
      };
      //
      console.log(state.userData.datasets);
      console.log(newDataInput);
      return {
        ...state, //spread operator
        err: "",
        isAdding: false,
        reFetch: !state.reFetch,
        newData: {
          label: "",
          data: []
        },
        //only doing the below until API is up and running....
        userData: {
          ...state.userData,
          datasets: [
            ...state.userData.datasets, //all previous info
            {
              id: newDataId,
              label: payload.label,
              data: payload.data,
              backgroundColor: "black",
              borderColor: "black"
            } //new data

            //  {newDataInput} //new data]
          ]
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
        isNewBranch: true,
        err: ""
      };
    case ADDBRANCHSUCCESS:
      return {
        ...state,
        err: "",
        isNewBranch: false,
        reFetch: !state.reFetch,
        newBranch: []
      };
    case ADDBRANCHFAIL:
      return {
        ...state,
        isNewBranch: false,
        err: payload
      };
    //======editing data from api======
    case EDITDATASTART:
      return {
        ...state,
        isEditing: true,
        err: "",
        dataToEdit: state.userData.datasets.find(
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
      console.log(
        "handle..newdataset, reducer:\n",
        `payload: ${payload}\n`, //all "input" details
        `.name: ${payload.target.name}\n`, //input field name
        `.value: ${payload.target.value}\n`, //input
        `.form: ${payload.form}\n`, //"newData" from handleChange
        `.id: ${payload.target.id}\n`, //gives the index #
        `state.newData: ${state.newData}\n`,
        `state: ${state.newData}\n`
        // ...state
      );
      const loc = payload.target.id;
      return {
        ...state,
        [payload.form]:
          payload.form === "newData"
            ? {
                ...state[payload.form],
                [payload.target.name]: payload.target.value
              }
            : {
                ...state[payload.form],
                [payload.target.name]: payload.target.value
              }
      };
    case HANDLENEWDATASET:
      let branchLength = state.userData.labels.length;
      /*
      console.log(
        "reducer.HANDLENEWDATASET>\n",
        // payload, //all "input" details
        `..name: ${payload.target.name}\n`, //input field name
        `..value: ${payload.target.value}\n`, //input
        `.. form: ${payload.form}\n`, //"newData" from handleChange
        `..id: ${payload.target.id}\n`, //gives the index #
        `state: ${state}\n`
      );
      */
      if (state.newData.data.length === 0) {
        for (let i = 0; i < branchLength; i++) {
          state.newData.data[i] = 0;
        }
      }
      return {
        ...state,
        newData: {
          ...state.newData,
          data: state.newData.data.map((dataVal, index) => {
            // console.log("reducer.data...", dataVal, index, payload.target.id);
            if (index == payload.target.id) {
              console.log("index matches!!");
              return payload.target.value;
            }
            return dataVal;
          })
        }
      };
    //__________
    case HANDLECHANGE_NEWBRANCH:
      console.log(
        "handle..newbranch, reducer:",
        payload.target.name,
        payload.target.value,
        payload.form
      );
      // console.log(payload.form);
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
        userData: {
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
