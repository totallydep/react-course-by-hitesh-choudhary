const Button = ({
  btnText,
  handleClick,
  backgroundColor = "bg-yellow-600",
  hoverBG = "hover:bg-teal-600",
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${backgroundColor} font-semibold px-4 py-2 rounded ${hoverBG}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
