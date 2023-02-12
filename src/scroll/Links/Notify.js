import React, { useState, useEffect } from "react";
import './Notify.css'
const Notify = () => {
  const [currency, setCurrency] = useState({});
  const [previousPrice, setPreviousPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/EUR"
      );
      const data = await response.json();
      setCurrency(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (previousPrice > currency.rates.USD) {
      alert("Currency has gone down");
    }
    setPreviousPrice(currency.rates.USD);
  }, [currency]);

  return <div>Checking currency...</div>;
};

export default Notify;