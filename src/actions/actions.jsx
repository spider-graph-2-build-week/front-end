// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { data, data2 } from "../dummycomps/Data.jsx"; //can remove after api is set up

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

const apiBase = "https://spider-graph-bw.herokuapp.com/api";
const apiGet = "https://spider-graph-bw.herokuapp.com/api/graphs/1";
const apiRegister = `${apiBase}/auth/register`;
const apiLogin = `${apiBase}/auth/login`;
// const apiGet = `${apiBase}/graphs/1`;
// const apiData = `${apiBase}/data`;
// const apiPosts = `${apiBase}/

//using this for now. change after api is set up correctly
const apiDummy = "https://jsonplaceholder.typicode.com/";
const apiData = `${apiDummy}todos/`;
const apiPosts = `${apiDummy}posts/1`;

const testInfo = {
  testName: "Steve",
  testPass: "Password"
};

//===delete above here once api is up...

//login actions
export const login = (event, credentials) => dispatch => {
  event.preventDefault();
  console.log("login", credentials);
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
    var dummyData2 = data2;
    var dummyReturn = [dummyData, dummyData2];
  } else {
    var dummyData = dummyStuff;
  }
  //====
  console.log("getData start..");
  dispatch({ type: GETDATASTART });
  axiosWithAuth()
    // .get(`${apiData}/1`)
    .get(`${apiGet}`)
    .then(res => {
      console.log("apiGet:", res.data, res);
      console.log(
        "CHANGE getData.then TO THE CORRECT API!!!\n dummyData:",
        dummyData
      );
      // dispatch({ type: GETDATASUCCESS, payload: res.data });
      dispatch({ type: GETDATASUCCESS, payload: dummyReturn });
    })
    .catch(err => {
      console.log("actions > getData.err:", err);
      return dispatch({ type: GETDATAFAIL });
    });
};

//Add data
export const addData = (event, newData) => dispatch => {
  event.preventDefault();
  dispatch({ type: ADDDATASTART });
  axiosWithAuth()
    // .post(`${apiPost}`,newData)
    // .then(res=> dispatch({type: ADDDATASUCCESS, payload: res.data.payload}))
    //REMOVE the below; KEEP the above=====
    .post(`${apiData}1/posts`, newData)
    .then(res => {
      console.log("=======\nFIX actions> addData!!!!\n=======");
      dispatch({ type: ADDDATASUCCESS, payload: newData });
    })
    //=====
    .catch(err => {
      console.log("actions > addData.err: ", err);
      return dispatch({ type: ADDDATAFAIL, payload: err });
    });
};

//Add extra branch
export const addBranch = (event, newBranch, userData) => dispatch => {
  event.preventDefault();
  dispatch({ type: ADDBRANCHSTART });
  axiosWithAuth()
    // .post(`${apiPost}`, newBranch)
    // .then(res => dispatch({ type: ADDBRANCHSTART, payload: res.data.payload }))
    //REMOVE the below; KEEP the above=====
    .post(`${apiData}1/posts`, userData) //userData just to get it to pass for now...
    .then(res => {
      console.log("=======\nFIX actions> addData!!!!\n=======");
      dispatch({ type: ADDBRANCHSUCCESS, payload: newBranch });
    })
    //=====
    .catch(err => {
      console.log("actions > addBranch.err:", err);
      return dispatch({ type: ADDBRANCHFAIL, payload: err });
    });
};

//Edit existing data
export const startEdit = () => ({
  type: EDITDATASTART
});
export const saveEdit = data => dispatch => {
  console.log("actions>saveEdit:\n", data);
  axiosWithAuth()
    .put(`${apiPosts}`, data)
    .then(res => {
      console.log("actions>saveEdit Success!,\n", data, "\nres:", res);
      dispatch({ type: EDITDATASUCCESS, payload: data });
      console.log("!===============CHANGE actions> saveEdit================!");
      // dispatch({ type: EDITDATASUCCESS, payload: res.data.payload })
    })
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
export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
export const setData = list => ({
  type: setData,
  payload: list
});
export const deleteUnit = unit => dispatch => {
  // console.log(`unit:`, unit, `\n.id:,`, unit.id);
  //unit = {id: #, label: '', data: [], others...}
  axiosWithAuth()
    // .delete(`${apiData}/${unit.id}`)
    // .then(res => dispatch({ type: DELETEUNIT, payload: res.data.payload }))
    //-----
    .delete(apiPosts)
    .then(res => dispatch({ type: DELETEUNIT, payload: unit }))
    //-----
    .catch(err => {
      console.log("actions > deleteUnit.err: ", err);
    });
};
