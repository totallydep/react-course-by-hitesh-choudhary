const IndividualColor = ({ individualColorName, handleClick }) => {
  return (
    <button
      onClick={() => handleClick(individualColorName)}
      className={`p-4 ${individualColorName} rounded`}
    ></button>
  );
};

export default IndividualColor;
