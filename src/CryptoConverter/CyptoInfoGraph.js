import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import '../CryptoConverter/Crypto.css'
const RealTimeDoughnutChart = () => {
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
      );
      setChartData({
        labels: result.data.map(({ name }) => name),
        datasets: [
          {
            data: result.data.map(({ current_price }) => current_price),
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)"
            ]
          }
        ]
      });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="Doughnut-wrapper">
      {!isLoading ? (
        <Doughnut
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: { text: "Top 10 Cryptocurrencies by Market Cap", display: true },
            legend: {
              display: true,
              position: "bottom",
              
            }
          }}
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default RealTimeDoughnutChart;
