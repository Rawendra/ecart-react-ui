import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  isLoading:false
}

export const spinnerSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    toggleLoading:(state)=>{
      state.isLoading=!state.isLoading
    },
    setLoading:(state, action)=>{
      state.isLoading=action.isLoading;
    }
  

  },
})

// Action creators are generated for each case reducer function
export const { toggleLoading,  setLoading} = spinnerSlice.actions

export default spinnerSlice.reducer