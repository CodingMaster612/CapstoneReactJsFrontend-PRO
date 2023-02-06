import React, { useState, useEffect } from "react";
import axios from "axios";
import '../CurrencyConverter/CurrencyConverter.css'
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    axios
      .get("https://api.exchangerate-api.com/v4/latest/USD")
      .then(response => {
        setExchangeRates(response.data.rates);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(exchangeRates).length !== 0) {
      setConvertedAmount((amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency]);
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = event => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = event => {
    setToCurrency(event.target.value);
  };

  return (
    <div className="currency-converter">
      <form>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} />

        <label htmlFor="from">From:</label>
        <select id="from" value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>

        <label htmlFor="to">To:</label>
        <select id="to" value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>
      </form>

      <p>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
    </div>
  );
};

export default CurrencyConverter;
