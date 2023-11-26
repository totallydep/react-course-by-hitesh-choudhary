import { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { Card } from "./components";

const App = () => {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const handleConversion = () => {
    const rate = Number((amount * currencyInfo[to]).toFixed(2));
    console.log(rate);
    setConvertedAmount(rate);
  };

  return (
    <div className="bg-gray-800 text-white  flex flex-col h-screen w-full justify-center items-center">
      <Card
        amount={amount}
        setAmount={setAmount}
        convertedAmount={convertedAmount}
        setConvertedAmount={setConvertedAmount}
        handleSwap={handleSwap}
        handleConversion={handleConversion}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        options={options}
      />
    </div>
  );
};

export default App;
