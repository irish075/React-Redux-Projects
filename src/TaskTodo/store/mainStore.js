 import { configureStore } from "@reduxjs/toolkit";
 import todoReducer from './todoReducer'
 const taskStore = configureStore({
     reducer:{
         todos: todoReducer
     }
 })
 export default taskStore