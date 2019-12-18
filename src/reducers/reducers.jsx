// reducers.jsx for being explicit in instructions
import {
  GLOBAL_VAR_1,
  GLOBAL_VAR_2,
  GLOBAL_VAR_3
  //some more names
} from "../actions/actions";

const initialState = {
  err: "",
  //logging in
  isLoggingIn: false,
  credentials: [],
  token: "",
  //getting data from API or similar
  isFetching: false,
  //data storage
  //****CHANGE TO DESCRIPTIVE NAMES******
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
    default:
      return state;
  }
};
