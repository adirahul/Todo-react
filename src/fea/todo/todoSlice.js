import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, Title: "Learn Redux", done: false, editMode: false },
    { id: 2, Title: "Learn DSA", done: false, editMode: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        Title: action.payload,
        done: false,
        editMode: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateEditMode: (state, action) => {
        state.todos = state.todos.map((todo) => {
            if(todo.id === action.payload){
              return {
                ...todo,
                editMode: true,
              }
            }
            return todo;
        })
    }
  },
});

export const { addTodo, removeTodo, updateEditMode } = todoSlice.actions;

export default todoSlice.reducer;
