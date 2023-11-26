import { useEffect, useState } from "react";

const InputOutputBox = ({
  label = "label",
  individualAmount,
  onIndividualAmountChange,
  individualCurrencyType,
  onIndividualCurrencyTypeChange,
  options = [],
  placeholder = "...",
}) => {
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    if (onIndividualAmountChange === null) {
      setReadOnly(true);
    } else {
      return;
    }
  }, []);

  return (
    <div className="bg-teal-800 p-2 rounded-sm ">
      <div>
        <label className="font-semibold">{label}</label>
        <br />
        <input
          className="text-black rounded-sm py-1 px-2 focus:outline-none "
          type="number"
          placeholder={placeholder}
          value={individualAmount}
          onChange={(e) =>
            onIndividualAmountChange &&
            Number(onIndividualAmountChange(e.target.value))
          }
          readOnly={readOnly}
        />
      </div>

      <div className="flex justify-between align-middle my-1 ">
        <label className="font-semibold">Currency Type</label>
        <select
          className="bg-white text-black rounded-sm w-fit px-1 focus:outline-0"
          value={individualCurrencyType}
          onChange={(e) => onIndividualCurrencyTypeChange(e.target.value)}
        >
          {options
            .filter(
              (curr) =>
                curr === "usd" ||
                curr === "inr" ||
                curr === "pkr" ||
                curr === "aed" ||
                curr === "eur" ||
                curr === "eth"
            )
            .map((curr) => (
              <option key={curr} value={curr}>
                {curr.toUpperCase()}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default InputOutputBox;
