import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleComplete } from "../features/todo/todoSlice";
import { MdDeleteSweep } from "react-icons/md";
import { Checkbox } from "@material-tailwind/react";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [completedStyles, setCompletedStyles] = useState(
    {}
  ); /* { "todoItemId1": "line-through", "todoItemId2": "", ...so on } */

  useEffect(() => {
    const initialStyles = {};
    todos.forEach((item) => {
      initialStyles[item.id] = item.isCompleted ? "line-through" : "";
    });
    setCompletedStyles(initialStyles);
  }, [todos]);

  return (
    <ul className="">
      {todos.map((item) => (
        <li
          className="w-[560px] rounded p-2 mb-2 flex gap-4 justify-between  bg-green-200/30"
          key={item.id}
        >
          <div
            className={`flex gap-2 items-center ${completedStyles[item.id]}`}
          >
            <Checkbox
              checked={item.isCompleted}
              containerProps={{
                className: "p-1",
              }}
              onChange={() => dispatch(toggleComplete(item.id))}
            />

            {item.text}
          </div>
          <button
            onClick={() => dispatch(deleteTodo(item.id))}
            className="bg-red-500 py-1 px-2 hover:bg-purple-600 rounded font-semibold"
          >
            <MdDeleteSweep />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
