import React, { useState, useEffect } from "react";
import '../../css/Info.css'
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
      });
  }, []);

  useEffect(() => {
    if (amount && rates[toCurrency]) {
      setConvertedAmount((amount * rates[toCurrency]).toFixed(2));
      localStorage.setItem("convertedAmount", convertedAmount);
    }
  }, [amount, rates, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="wrapper-info">
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      {convertedAmount && (
        <p>
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
