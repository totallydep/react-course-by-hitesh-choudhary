import { useEffect } from "react";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./app/store";
import { setTodos } from "./features/todo/todoSlice";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // on startup
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList && todoList.length) {
      // Dispatch an action to update Redux store
      dispatch(setTodos(todoList));
    }
  }, [dispatch]);

  // on every load
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col py-12 items-center ">
      <h1 className="text-2xl font-bold">Todo App using Redux Toolkit</h1>
      <div className="flex flex-col items-center">
        <AddTodoItem />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
