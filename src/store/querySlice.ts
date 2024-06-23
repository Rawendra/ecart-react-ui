import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  articles: [],
  countrycode:'US'
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    updateCountryCode:(state, action)=>{
      
      state.countrycode=action.payload
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
export const { udpate, clear ,getArticles, setArticles,updateCountryCode} = querySlice.actions;

export default querySlice.reducer;
