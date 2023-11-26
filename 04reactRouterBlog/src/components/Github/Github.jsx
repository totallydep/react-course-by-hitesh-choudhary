import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
const Github = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/totallydep")
  //     .then((response) => response.json())
  //     .then((response) => setData(response));
  // }, []);
  const data = useLoaderData();

  return (
    <div className="flex flex-col justify-center items-center my-12">
      <Link to="https://github.com/totallydep" target="_blank">
        <img
          className="rounded-md w-[300px]"
          src={data.avatar_url}
          alt="avatar"
        />
      </Link>
      <h1 className="my-4 text-4xl font-bold">
        GitHub Username: <span className="text-yellow-500">{data.login}</span>
      </h1>
    </div>
  );
};

export default Github;
