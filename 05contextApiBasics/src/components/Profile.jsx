import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="bg-gray-800/50 text-white p-4 text-2xl my-8 rounded">
        <h2>Please Login</h2>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-800/50 text-white p-4 text-2xl my-8 rounded">
        <h2>WELCOME: {user.username}</h2>
      </div>
    );
  }
};

export default Profile;
