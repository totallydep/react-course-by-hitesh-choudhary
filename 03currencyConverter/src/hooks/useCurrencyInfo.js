import { useState, useEffect } from "react";

const useCurrencyInfo = (currencyType) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyType}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currencyType]));
  }, [currencyType]);

  return data;
};

export default useCurrencyInfo;
