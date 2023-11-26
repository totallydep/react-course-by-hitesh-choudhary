const Button = ({ handleClick, btnText, customStyling }) => {
  return (
    <button
      className={`p-2 rounded-sm my-2 w-full ${customStyling}`}
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
