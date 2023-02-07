import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyDoughnutChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      setData(Object.entries(result.data.rates));
    };
    fetchData();
  }, []);

  const renderDoughnut = () => {
    const canvas = document.getElementById("currency-doughnut-chart");
    const ctx = canvas.getContext("2d");

    const total = data.reduce((sum, item) => sum + item[1], 0);

    let startAngle = 0;
    data.forEach(item => {
      const endAngle = startAngle + (item[1] / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
        startAngle,
        endAngle
      );
      ctx.closePath();
      ctx.fillStyle = "lightblue";
      ctx.fill();
      startAngle = endAngle;
    });
  };

  useEffect(() => {
    if (data.length > 0) {
      renderDoughnut();
    }
  }, [data]);

  return (
    <div>
      <canvas id="currency-doughnut-chart" width="300" height="400"></canvas>
    </div>
  );
};

export default CurrencyDoughnutChart;
