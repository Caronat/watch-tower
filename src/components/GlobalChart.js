import React, { useEffect, useState } from "react";
import { Tooltip, Treemap } from "recharts";
import colors from "../styles/_settings.scss";

const GlobalChart = ({ coinsData }) => {
  const [dataArray, setDataArray] = useState([]);

  const colorPicker = (number) => {
    if (number >= 20) return colors.color1;
    if (number >= 5) return colors.green2;
    if (number >= 0) return colors.green1;
    if (number >= -5) return colors.red1;
    if (number >= -20) return colors.red2;
    return colors.black2;
  };

  const isStableCoin = (coin) => {
    if (coin === "usdt") return true;
    if (coin === "usdc") return true;
    if (coin === "busd") return true;
    if (coin === "dai") return true;
    if (coin === "ust") return true;
    if (coin === "mim") return true;
    return false;
  };

  useEffect(() => {
    let chartData = [];

    if (coinsData.length > 0) {
      for (let i = 0; i < 45; i++) {
        let coinData = coinsData[i];

        if (isStableCoin(coinData.symbol)) continue;

        chartData.push({
          name:
            coinData.symbol.toUpperCase() +
            " " +
            coinData.market_cap_change_percentage_24h.toFixed(1) +
            "%",
          size: coinData.market_cap,
          fill: colorPicker(coinData.market_cap_change_percentage_24h),
        });
      }
    }

    setDataArray(chartData);
  }, [coinsData]);

  const CustomToolTip = ({ payload, active }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.name}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="global-chart">
      <Treemap
        width={730}
        height={180}
        data={dataArray}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#333"
        fill="#000"
      >
        <Tooltip content={<CustomToolTip />} />
      </Treemap>
    </div>
  );
};

export default GlobalChart;
