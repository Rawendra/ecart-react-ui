import { Password } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicAuth: "",
  value: "",
  articles: [],
  countrycode: "US",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateCountryCode: (state, action) => {
      state.countrycode = action.payload;
    },

    updateBasicAuth: (state, action) => {
      console.log(state, action)
      state.basicAuth = action.payload.basicAuth;
    },

    udpate: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.value = action.payload;
    },
    clear: (state) => {
      state.value = "";
    },
    getArticles: (state, action) => {
      state.articles = action.payload;
    },
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { udpate, clear, updateBasicAuth, setArticles, updateCountryCode } =
  loginSlice.actions;

export default loginSlice.reducer;
