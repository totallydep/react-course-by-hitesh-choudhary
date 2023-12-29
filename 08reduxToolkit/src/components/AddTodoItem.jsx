import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodoItem = () => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    inputText && dispatch(addTodo(inputText));
    setInputText("");
  };
  return (
    <form onSubmit={handleAddTodo} className="my-4">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
        className="px-2 w-[500px] text-black py-2 rounded-l focus:outline-none focus:bg-green-100"
      />
      <button className="px-4 py-2 bg-green-700 font-bold rounded-r hover:bg-purple-500">
        Add
      </button>
    </form>
  );
};

export default AddTodoItem;
