import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CryptoConverter/Crypto.css'

function Crypto() {
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=${toCurrency}`);
      setExchangeRate(response.data[toCurrency]);
    };
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setConvertedAmount(amount * exchangeRate);
  }, [amount, exchangeRate]);

  return (
    <div className="crypto-wrapper">
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={e => setFromCurrency(e.target.value)}
      >
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="LTC">LTC</option>
      </select>
      <select
        value={toCurrency}
        onChange={e => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <h1>{convertedAmount}</h1>
    </div>
  );
}

export default Crypto;