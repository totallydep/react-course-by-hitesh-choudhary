import IndividualColor from "./IndividualColor";

const ColorSelector = ({ handleClick }) => {
  return (
    <div className=" bg-purple-100  rounded-xl w-fit flex flex-wrap gap-4 p-2">
      <IndividualColor
        handleClick={handleClick}
        individualColorName="bg-green-800"
      />
      <IndividualColor
        handleClick={handleClick}
        individualColorName="bg-white"
      />
      <IndividualColor
        handleClick={handleClick}
        individualColorName="bg-red-800"
      />
      <IndividualColor
        handleClick={handleClick}
        individualColorName="bg-yellow-100"
      />
      <IndividualColor
        handleClick={handleClick}
        individualColorName="bg-black"
      />
    </div>
  );
};

export default ColorSelector;
