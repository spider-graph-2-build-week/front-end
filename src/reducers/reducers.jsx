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
      /*
      console.log(
        `ADDDATASUCCESS>\n`,
        `newDataId:${newDataId}`,
        `payload: ${payload}`
      );
      console.log(state.userData.datasets);
      */
      //=====
      /*
      return {
        ...state, //spread operator
        err: "",
        isAdding: false,
        reFetch: !state.reFetch,
        newData: {
          label: "",
          data: []
        },
      };
        */
      //only doing the below until API is up and running===========================
      return {
        ...state, //spread operator
        err: "",
        isAdding: false,
        reFetch: !state.reFetch,
        newData: {
          label: "",
          data: []
        },
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
        ...state, //spread operator
        err: "",
        isNewBranch: false,
        reFetch: !state.reFetch,
        newBranch: "",
        //forcing data to change for now============================================
        userData: {
          ...state.userData,
          labels: [...state.userData.labels, state.newBranch]
        }
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
      console.log(payload);
      console.log(
        "handle..newdataset, reducer:\n",
        `payload: ${payload}\n`, //all "input" details
        `.name: ${payload.target.name}\n`, //input field name
        `.value: ${payload.target.value}\n`, //input
        `.form: ${payload.form}\n`, //"newData" from handleChange
        `.id: ${payload.target.id}\n`, //gives the index #
        `state.newData: ${state.newData}\n`,
        `state: ${state}\n` // state
      );
      const loc = payload.target.id;
      let branchLength = state.userData.labels.length;
      if (state.newData.data.length === 0) {
        for (let i = 0; i < branchLength; i++) {
          state.newData.data[i] = 0;
        }
      }
      //switch case due to too many cases
      switch (
        payload.form //different management depending on the form
      ) {
        case "newBranch": //checks payload.form for 'newBranch'
          console.log("newBranch case");
          return {
            ...state,
            newBranch: payload.target.value
          };
        case "newData": //checks payload.form for 'newData'
          console.log("newData case");
          return {
            ...state,
            [payload.form]:
              payload.target.name === "label"
                ? //IF target.name === 'label', then...
                  (console.log("is newData, is label"),
                  {
                    ...state[payload.form],
                    [payload.target.name]: payload.target.value
                  })
                : //IF target.name != 'label', then...
                  (console.log("is newData, not label"),
                  {
                    ...state[payload.form],
                    data: state[payload.form].data.map((dataVal, index) => {
                      if (index == payload.target.id) {
                        console.log("index matches!!");
                        return payload.target.value;
                      }
                      return dataVal;
                    })
                  })
          }; //===end case "newData":
        default:
          console.log("default case");
          return state;
      }

    //==========================
    //==========================
    case CANCELEDIT:
      return {
        ...state,
        isEditing: false,
        dataToEdit: {},
        error: ""
      };
    case DELETEUNIT:
      // console.log("payload:", payload);
      /*
      return {
        ...state,
        reFetch: !state.reFetch
      };
      */
      return {
        ...state,
        reFetch: !state.reFetch,
        userData: {
          ...state.userData,
          datasets: state.userData.datasets.filter((dataset, index) => {
            if (dataset.id === payload.id) {
              return false;
            } else {
              return true;
            }
          })
        }
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
