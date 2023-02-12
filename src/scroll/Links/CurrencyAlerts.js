import React, { useState, useEffect } from 'react';

const CurrencyAlerts = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [priceThreshold, setPriceThreshold] = useState(0);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      const data = await response.json();
      setCurrencies(data);
    };
    fetchData();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setAlerts([...alerts, { currency: selectedCurrency, threshold: priceThreshold }]);
    setSelectedCurrency('');
    setPriceThreshold(0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      alerts.forEach(alert => {
        const currency = currencies.find(c => c.id === alert.currency);
        if (currency && currency.current_price >= alert.threshold) {
          console.log(`Price of ${currency.name} (${currency.symbol}) has reached or exceeded $${alert.threshold}.`);
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [alerts, currencies]);

  return (
    <div>
      <h1>Currency Alerts</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select a currency:
          <select value={selectedCurrency} onChange={event => setSelectedCurrency(event.target.value)}>
            <option value="">--Select--</option>
            {currencies.map(currency => (
              <option key={currency.id} value={currency.id}>
                {currency.name} ({currency.symbol})
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Set price threshold:
          <input type="number" value={priceThreshold} onChange={event => setPriceThreshold(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add Alert</button>
      </form>
      <h2>Active Alerts</h2>
      <ul>
        {alerts.map((alert, index) => {
          const currency = currencies.find(c => c.id === alert.currency);
          return (
            <li key={index}>
              {currency ? `${currency.name} (${currency.symbol}) >= $${alert.threshold}` : 'Loading...'}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CurrencyAlerts;