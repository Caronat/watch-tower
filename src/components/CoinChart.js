import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import colors from "../styles/_settings.scss";

const CoinChart = ({ coinId, coinName }) => {
  const [duration, setDuration] = useState(30);
  const [coinData, setcoinData] = useState();

  const headerData = [
    [1, "1 jour"],
    [3, "3 jours"],
    [7, "7 jours"],
    [30, "1 mois"],
    [91, "3 mois"],
    [181, "6 mois"],
    [365, "1 an"],
    [3000, "Max"],
  ];

  useEffect(() => {
    let dataArray = [];
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${
          duration > 32 ? "&interval=daily" : ""
        }`
      )
      .then((res) => {
        for (let i = 0; i < res.data.prices.length; i++) {
          const timestamp = res.data.prices[i][0];
          const price = res.data.prices[i][1];
          dataArray.push({
            date: new Date(timestamp).toLocaleDateString(),
            price: parseInt(price),
          });
        }
        setcoinData(dataArray);
      });
  }, [duration]);

  return (
    <div className="coin-chart">
      <p>{coinName}</p>
      <div className="btn-container">
        {headerData.map((el) => {
          const [days, label] = [...el];
          return (
            <div
              className={days === duration ? "active-btn" : ""}
              key={days}
              htmlFor={"btn-" + days}
              onClick={() => setDuration(days)}
            >
              {label}
            </div>
          );
        })}
      </div>
      <AreaChart
        width={680}
        height={250}
        data={coinData}
        margin={{
          top: 10,
          right: 0,
          left: 100,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.color1} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colors.red1} stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke={colors.color1}
          fill="url(#chartColor)"
          fillOpacity={1}
        />
      </AreaChart>
    </div>
  );
};

export default CoinChart;
