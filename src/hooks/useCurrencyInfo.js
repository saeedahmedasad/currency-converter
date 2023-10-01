import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
      .then((res) => {
        // console.log(res.data[currency]);
        setData(res.data[currency]);
      })
      .catch((error) => console.log(error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
