import { useState, useEffect } from "react";
import { TodoContext, TodoProvider, useTodo } from "./contexts";
import uuid from "react-uuid"; /* use "uuid()" to create a new id everytime */
import { TodoForm, TodoItem } from "./components";

const App = () => {
  // array containing all the todo items
  const [todos, setTodos] = useState([]);

  // addTodoItem
  const addTodoItem = (todo) => {
    setTodos((prev) => [...prev, { id: uuid(), ...todo }]);
  };

  // deleteTodoItem
  const deleteTodoItem = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // updateTodoItem
  const updateTodoItem = (id, todo) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, todo } : item))
    );
  };

  // toggleComplete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  // on start-up
  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todoList"));
    if (getTodos && getTodos.length) {
      setTodos(getTodos);
    }
  }, []);

  // on every operational occuring
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodoItem,
        deleteTodoItem,
        updateTodoItem,
        toggleComplete,
      }}
    >
      <div className="bg-gray-700 min-h-screen flex flex-col pt-20 items-center">
        <h1 className="text-6xl mb-8 font-bold text-white">Todo List</h1>
        <div className="w-[780px] p-4 bg-green-600/10 rounded-md">
          <TodoForm />
          <hr className="mt-4 w-2/3 mx-auto border-white/20 rounded-full" />
          {/* Loops through TodoItems */}
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} />
          ))}
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
