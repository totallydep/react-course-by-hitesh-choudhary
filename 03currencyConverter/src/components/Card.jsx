import { useEffect } from "react";
import InputOutputBox from "./InputOutputBox";
import Button from "./Button";

const Card = ({
  amount,
  setAmount,
  convertedAmount,
  setConvertedAmount,
  handleSwap,
  handleConversion,
  from,
  setFrom,
  to,
  setTo,
  options,
}) => {
  // making input and Output in sync
  useEffect(() => {
    const handleResult = () => {
      if (amount == "") {
        setConvertedAmount("");
      } else {
        return;
      }
    };
    handleResult();
  }, [amount, setAmount, handleConversion]);

  return (
    <div className="flex flex-col justify-center align-middle bg-slate-600/20 p-4 rounded-sm">
      <h1 className="text-2xl text-center mb-2 font-semibold">
        Currency Converter
      </h1>

      {/* input container starts here */}
      <InputOutputBox
        label="From"
        individualAmount={amount}
        onIndividualAmountChange={setAmount}
        individualCurrencyType={from}
        onIndividualCurrencyTypeChange={setFrom}
        options={options}
        placeholder="Enter the amount"
      />
      {/* input container starts here */}

      {/* convert button starts here */}
      <Button
        customStyling="hover:bg-indigo-700 bg-yellow-800"
        handleClick={handleConversion}
        btnText={`Convert ${from.toUpperCase()} To ${to.toUpperCase()}`}
      />
      {/* convert button ends here */}

      {/* output container ends here */}
      <InputOutputBox
        label="To"
        individualAmount={convertedAmount}
        onIndividualAmountChange={null}
        individualCurrencyType={to}
        onIndividualCurrencyTypeChange={setTo}
        options={options}
        placeholder={`Result in ${to.toUpperCase()}`}
      />
      {/* output container ends here */}

      {/* swap button starts here */}
      <Button
        customStyling="hover:bg-indigo-700 bg-gray-800"
        handleClick={handleSwap}
        btnText="Swap Currencies"
      />
      {/* swao button ends here */}
    </div>
  );
};

export default Card;
