import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <div className="bg-teal-800 flex flex-col justify-center items-center min-h-screen ">
        <h1 className="text-4xl text-center mb-4 font-bold">
          context Api Basics Overview
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;
