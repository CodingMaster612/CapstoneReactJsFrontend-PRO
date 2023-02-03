import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Dollar", Currency: 1, pv: 2400, amt: 2400 },
  { name: "Bitcoin", Currency: 2352420, pv: 1398, amt: 2210 },
  { name: "Ethereum", Currency: 1658.11, pv: 9800, amt: 2290 },
  { name: "Doge", Currency: 0.092, pv: 3908, amt: 2000 },
  { name: "Yen", Currency: 0.0077, pv: 4800, amt: 2181 },
  { name: "Peso", Currency: 0.053, pv: 3800, amt: 2500 },
  { name: "Won", Currency: 0.00081, pv: 4300, amt: 2100 },
];

const MoveableChart = () => {
  const [selectedDataKey, setSelectedDataKey] = useState("Currency");
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      onClick={(e) => {
        const { x, y } = e.activeLabel;
        const chartWidth = e.chartWidth;
        const dataCount = data.length;
        setStartIndex(Math.max(0, Math.round(x / chartWidth * dataCount) - 2));
        setEndIndex(Math.min(dataCount - 1, Math.round(x / chartWidth * dataCount) + 2));
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend onClick={({ dataKey }) => setSelectedDataKey(dataKey)} />
      <Line type="monotone" dataKey={selectedDataKey} stroke="#8884d8" />
    </LineChart>
  );
};

export default MoveableChart;