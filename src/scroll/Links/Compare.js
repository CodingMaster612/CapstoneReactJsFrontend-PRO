import React, { useState, useEffect } from 'react';
import './Compare.css'
const Compare = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      const data = await response.json();
      setCurrencies(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Currency Comparison</h1>
      <table>
        <thead>
          <tr>
            <th>Currency Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map(currency => (
            <tr key={currency.id}>
              <td>{currency.name}</td>
              <td>{currency.symbol}</td>
              <td>{currency.current_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Compare;