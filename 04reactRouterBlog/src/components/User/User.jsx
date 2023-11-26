import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="flex justify-center items-center p-20 font-bold">
      <h1 className="text-6xl bg-yellow-100/30 px-8 py-6 rounded">
        User: <span className="text-yellow-500">{userId}</span>
      </h1>
    </div>
  );
};

export default User;
