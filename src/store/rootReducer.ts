import counterReducer from "./counterSlice";
import querySlice from "./querySlice";
import loginSlice from "./loginSlice";
import spinnerSlice from './spinnerSlice'
const rootReducer = {
  counter: counterReducer,
  query: querySlice,
  login:loginSlice,
  spinner: spinnerSlice
};

export default rootReducer;
