import { createSlice } from "@reduxjs/toolkit";
const initialState = [{ id: 1, text: "first Task" }];

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.text = text;
      }
    },
  },
});
export const { addTask, removeTask, editTask } = todoReducer.actions;
export default todoReducer.reducer;
