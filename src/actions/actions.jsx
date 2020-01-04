// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { data } from "../dummycomps/Data.jsx"; //can remove after api is set up

//var names with all caps lock represents global variables
export const GLOBAL_VAR_1 = "GLOBAL_VAR_1";
export const GLOBAL_VAR_2 = "GLOBAL_VAR_2";
export const GLOBAL_VAR_3 = "GLOBAL_VAR_3";

export const GETDATASTART = "GETDATASTART";
export const GETDATASUCCESS = "GETDATASUCCESS";
export const GETDATAFAIL = "GETDATAFAIL";

export const LOGINSTART = "LOGINSTART";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOGINFAIL = "LOGINFAIL";

export const REGISTERSTART = "REGISTERSTART";
export const REGISTERSUCCESS = "REGISTERSUCCESS";
export const REGISTERFAIL = "REGISTERFAIL";

export const EDITDATASTART = "EDITDATASTART";
export const EDITDATASUCCESS = "EDITDATASUCCESS";
export const EDITDATAFAIL = "EDITDATAFAIL";

export const ADDDATASTART = "ADDDATASTART";
export const ADDDATASUCCESS = "ADDDATASUCCESS";
export const ADDDATAFAIL = "ADDDATAFAIL";

export const ADDBRANCHSTART = "ADDBRANCHSTART";
export const ADDBRANCHSUCCESS = "ADDBRANCHSUCCESS";
export const ADDBRANCHFAIL = "ADDBRANCHFAIL";

export const HANDLENEWDATASET = "HANDLENEWDATASET";
export const HANDLECHANGE_NEWBRANCH = "HANDLECHANGE_NEWBRANCH";
export const HANDLECHANGE = "HANDLECHANGE";
export const LOGOUT = "LOGOUT";
export const DELETEUNIT = "DELETEUNIT";
export const CANCELEDIT = "CANCELEDIT";

const apiBase = "https://spider-graph-bw.herokuapp.com/api/auth";
const apiRegister = `${apiBase}/register`;
const apiLogin = `${apiBase}/login`;
// const apiData = `${apiBase}/data`;

//using this for now. change after api is set up correctly
const apiData = "https://jsonplaceholder.typicode.com/todos/1";

const testInfo = {
  testName: "Steve",
  testPass: "Password"
};

//===delete above here once api is up...

//login actions
export const login = (event, credentials) => dispatch => {
  event.preventDefault();
  dispatch({ type: LOGINSTART });
  axiosWithAuth()
    .post(apiLogin, credentials)
    .then(res => {
      console.log("actions.jsx > login > .then:", res.data);
      dispatch({ type: LOGINSUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("actions.jsx > login > .err", err);
      return dispatch({ type: LOGINFAIL, payload: err });
    });
};

//register actions
export const register = (event, credentials) => dispatch => {
  event.preventDefault();
  dispatch({ type: REGISTERSTART });
  axiosWithAuth()
    .post(apiRegister, credentials)
    .then(res => {
      console.log("actions.jsx > register > .then", res);
      dispatch({ type: REGISTERSUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log("actions.jsx > register > .err", err);
      return dispatch({ type: REGISTERFAIL, payload: err });
    });
};

//get data from api
export const getData = dummyStuff => dispatch => {
  //====
  if (!dummyStuff.userName) {
    var dummyData = data;
  } else {
    var dummyData = dummyStuff;
  }
  //====
  dispatch({ type: GETDATASTART });
  axiosWithAuth()
    .get(apiData)
    .then(res => {
      // dispatch({ type: GETDATASUCCESS, payload: res.data });
      console.log(
        "CHANGE getData.then TO THE CORRECT API!!!\n dummyData:",
        dummyData
      );
      //using the below FOR NOW. CHANGE LATER!!!
      dispatch({ type: GETDATASUCCESS, payload: dummyData });
    })
    .catch(err => {
      console.log("actions > getData.err:", err);
      return dispatch({ type: GETDATAFAIL });
    });
};

//Add data
export const addData = (event, newData) => dispatch => {
  console.log("addData starting....");
  event.preventDefault();
  dispatch({ type: ADDDATASTART });
  axiosWithAuth()
    .post(`${apiData}/posts`, newData)
    .then(res => {
      console.log("CHANGE addData.then to THE CORRECT API!!!!", newData);
      dispatch({ type: ADDDATASUCCESS, payload: newData }); //using this until API works
      // dispatch({ type: ADDDATASUCCESS, payload: res.data.payload })
    })
    .catch(err => {
      console.log("actions > addData.err: ", err);
      return dispatch({ type: ADDDATAFAIL, payload: err });
    });
};

//Add extra branch
export const addBranch = (event, newBranch) => dispatch => {
  event.preventDefault();
  dispatch({ type: ADDBRANCHSTART });
  axiosWithAuth()
    .post(apiData, newBranch)
    .then(res => dispatch({ type: ADDBRANCHSTART, payload: res.data.payload }))
    .catch(err => {
      console.log("actions > addBranch.err:", err);
      return dispatch({ type: ADDBRANCHFAIL, payload: err });
    });
};

//Edit existing data
export const startEdit = id => ({
  type: EDITDATASTART,
  payload: id
});
export const saveEdit = data => dispatch => {
  axiosWithAuth()
    .put(`${apiData}/${data.id}`, data)
    .then(res => dispatch({ type: EDITDATASUCCESS, payload: res.data.payload }))
    .catch(err => {
      console.log("actions > saveEdit.err:", err);
      return dispatch({ type: EDITDATAFAIL, payload: err });
    });
};
export const cancelEdit = () => ({
  type: CANCELEDIT
});

export const handleChange = (event, formType) => {
  return {
    type: HANDLECHANGE,
    payload: { target: event.target, form: formType }
  };
};
export const handleNewDataset = (event, formType) => {
  console.log(
    `actions.jsx > handleChange > formType, event.target}:`,
    formType,
    event.target
  );
  return {
    type: HANDLENEWDATASET,
    payload: { target: event.target, form: formType }
  };
};
export const handleChange_newBranch = (event, formType) => {
  return {
    type: HANDLECHANGE_NEWBRANCH,
    payload: { target: event.target, form: formType }
  };
};

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
export const setData = list => ({
  type: setData,
  payload: list
});
export const deleteUnit = unit => dispatch => {
  axiosWithAuth()
    .delete(`${apiData}/${unit.id}`)
    .then(res => dispatch({ type: DELETEUNIT, payload: res.data.payload }))
    .catch(err => {
      console.log("actions > deleteUnit.err: ", err);
    });
};
