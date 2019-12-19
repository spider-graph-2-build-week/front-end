import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//var names with all caps lock represents global variables
export const GLOBAL_VAR_1 = "GLOBAL_VAR_1";
export const GLOBAL_VAR_2 = "GLOBAL_VAR_2";
export const GLOBAL_VAR_3 = "GLOBAL_VAR_3";

export const HANDLECHANGE = "HANDLECHANGE";
export const GETDATASTART = "GETDATASTART";
export const GETDATASUCCESS = "GETDATASUCCESS";
export const GETDATAFAIL = "GETDATAFAIL";

export const LOGINSTART = "LOGINSTART";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOGINFAIL = "LOGINFAIL";

const apiBase = "https://spider-graph-bw.herokuapp.com/api/auth";
const apiRegister = `${apiBase}/register`;
const apiLogin = `${apiBase}/login`;

const testInfo = {
  testName: "Steve",
  testPass: "Password"
};

// export const getData => dispatch => {
//     dispatch({type:GETDATASTART});
//     axiosWithAuth()
//     .get()

// }

export const login = (event, credentials) => dispatch => {
  event.preventDefault();
  dispatch({ type: LOGINSTART });
  axiosWithAuth()
    .post(apiLogin, credentials)
    .then(res => {
      //   console.log("actions.jsx > login > .then:", res.data);
      dispatch({ type: LOGINSUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log("actions.jsx > login > .then", err);
      return dispatch({ type: LOGINFAIL, payload: err });
    });
};

export const handleChange = (event, formType) => ({
  type: HANDLECHANGE,
  payload: { target: event.target, form: formType }
});
