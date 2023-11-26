import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const Footer = ({ scrollToTop }) => {
  return (
    <div>
      <div className="py-12 px-24 flex justify-between items-center border-t-2 border-yellow-400">
        <div className="text-8xl font-bold">
          <span className="text-yellow-500">my</span>Logo
        </div>
        <div className="underline flex flex-col text-xl font-bold">
          <Link to="#" onClick={scrollToTop}>
            Back to top
          </Link>
          <Link to="contact">Report a Problem</Link>
        </div>

        <blockquote className="w-[36ch] text-justify border-l-4 bg-gray-500/30 border-gray-500 p-4 rounded">
          I will not die wondering what I could've been. I will die knowing that
          I have become the person, whom I worked hard for.
        </blockquote>

        <div className="flex flex-col-reverse gap-4">
          <Button
            backgroundColor="bg-transparent"
            hoverBG="hover:bg-teal-600"
            handleClick={() => console.log(333)}
            btnText="Login"
          />
          <Button handleClick={() => console.log(333)} btnText="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
