import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import '../CryptoConverter/CryptoGraph.css'
const RealTimeCurrencyGraph = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const json = await result.json();
      setData(json.rates);
    };
    fetchData();
  }, []);

  const lineData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Currency Market Cap",
        data: Object.values(data),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="CurrencyGraph-wrapper">
      <Line data={lineData} />
    </div>
  );
};

export default RealTimeCurrencyGraph;
