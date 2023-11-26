import { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodoItem } = useTodo();

  const handleAdd = () => {
    addTodoItem({ todo, isCompleted: false });
    setTodo("");
  };

  return (
    <div className="w-full">
      <input
        className="w-[90%] py-2 px-4 rounded-l-md focus:outline-none focus:bg-green-100"
        placeholder="Write Todo..."
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="w-[10%] py-2 rounded-r-md bg-green-700 text-white
        font-semibold hover:bg-green-950"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
