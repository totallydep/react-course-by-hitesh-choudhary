import Button from "../Buttons/Button";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-12 py-4 border-b-2 border-b-yellow-500">
      <div className="text-3xl font-bold">
        <Link>
          <span className="text-yellow-500">my</span>Logo
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-500" : "text-gray-200/80"
                } hover:text-teal-600`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-500" : "text-gray-200/80"
                } hover:text-teal-600`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-500" : "text-gray-200/80"
                } hover:text-teal-600`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-500" : "text-gray-200/80"
                } hover:text-teal-600`
              }
            >
              GitHub
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <Button
          backgroundColor="bg-transparent"
          hoverBG="hover:bg-teal-600"
          handleClick={() => console.log(333)}
          btnText="Login"
        />
        <Button handleClick={() => console.log(333)} btnText="Sign Up" />
      </div>
    </div>
  );
};

export default Header;
