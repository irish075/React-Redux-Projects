import { createSlice } from "@reduxjs/toolkit";
 const initialState = {value:0};

 const createStore = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
      decrement: (state)=>{
        state.value -= 1
      },
      evenAdd:(state)=>{
      state.value += 2
      }
    }
 })

 export const {increment, decrement , evenAdd} = createStore.actions;
 export default createStore.reducer;