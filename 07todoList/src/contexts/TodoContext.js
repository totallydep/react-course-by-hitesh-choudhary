import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // array containing all the todos items
  todos: [
    {
      id: 1234,
      todo: "something",
      isCompleted: false,
    },
  ],

  // methods
  addTodoItem: (todo) => {},
  deleteTodoItem: (id) => {},
  updateTodoItem: (id, todo) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
