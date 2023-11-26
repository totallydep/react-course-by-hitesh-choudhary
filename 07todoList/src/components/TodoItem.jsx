import { useState } from "react";
import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { deleteTodoItem, updateTodoItem, toggleComplete } = useTodo();

  const handleDelete = () => {
    deleteTodoItem(todo.id);
  };
  const handleEdit = () => {
    updateTodoItem(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const handleComplete = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className="w-full mt-4 p-2 flex justify-center gap-2 items-center bg-indigo-100/30 rounded">
      <input
        checked={todo.isCompleted}
        onChange={handleComplete}
        className="w-10 h-10"
        type="checkbox"
      />
      <input
        className={`${
          todo.isCompleted ? "bg-green-200 line-through" : "bg-blue-100"
        } w-4/6 rounded-sm py-2 px-4 focus:outline-none focus:bg-blue-100`}
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            handleEdit();
          } else setIsTodoEditable((prev) => !prev);
        }}
        // disabled={todo.isCompleted}
        className={`${
          todo.isCompleted
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-blue-700 hover:bg-blue-950"
        } w-[10%] text-white font-semibold rounded-sm py-2`}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>
      <button
        onClick={handleDelete}
        className="w-[10%] text-white font-semibold rounded-sm py-2 bg-red-700 hover:bg-red-950"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
