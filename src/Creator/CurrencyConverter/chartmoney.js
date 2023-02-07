import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CurrencyConverter/CurrencyConverter.css'
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');

      const chartData = {
        labels: result.data.map(coin => coin.name),
        datasets: [
          {
            label: 'Market Cap (USD)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
            hoverBorderColor: 'rgba(255, 99, 132, 1)',
            data: result.data.map(coin => coin.market_cap),
          }
        ]
      };

      setData(chartData);
    };

    fetchData();
  }, []);

  return (
    <div className="chart-size">
      { data.labels ? <Bar data={data} /> : null }
      <div className="text-position">
        <h1 >PUT CONTENT HERE</h1>
      </div>
    </div>
  );
};

export default BarChart;
