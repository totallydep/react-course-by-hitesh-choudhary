import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="text-center bg-gray-300/50 p-2 rounded">
      <h2 className="mb-2 font-bold text-xl text-teal-900">Login Form</h2>
      <input
        className=" p-4 rounded mb-2 focus:outline-none focus:bg-teal-100"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter Username"
      />
      <br />
      <input
        className=" p-4 rounded mb-2 focus:outline-none focus:bg-teal-100"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password"
      />
      <br />
      <button
        className="w-full bg-green-700 hover:bg-indigo-700 py-2 rounded font-bold text-white"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
