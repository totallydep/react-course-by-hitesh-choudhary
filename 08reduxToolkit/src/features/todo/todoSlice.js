import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const handleComplete = (state, action) => {
  const updatedTodos = state.todos.map((todo) =>
    todo.id === action.payload
      ? { ...todo, isCompleted: !todo.isCompleted }
      : todo
  );
  state.todos = updatedTodos;
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, isCompleted: false };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => action.payload !== item.id);
    },
    toggleComplete: handleComplete,
  },
});

export const { setTodos, addTodo, deleteTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
