import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CryptoConverter/Crypto.css'

const CoinGecko = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => setCurrencyData(res.data))
      .catch(err => console.error(err));
  }, [selectedCurrency]);

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  return (
    <div className="CoinGecko">
      <h2>Crypto Currency Converter</h2>
      <form>
        <label htmlFor="amount">Amount:</label>
        <input type="text" id="amount" value={amount} onChange={handleAmountChange} />

        <label htmlFor="currency">Currency:</label>
        <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {currencyData.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>{(coin.current_price * amount).toFixed(2)} {selectedCurrency}</td>
              <td>{(coin.market_cap * amount).toFixed(2)} {selectedCurrency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinGecko;
