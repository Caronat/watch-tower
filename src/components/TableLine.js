import React from "react";
import useBoolean from "../hooks/useBoolean";
import { compactFormater, priceFormater } from "../utils/formater";
import CoinChart from "./CoinChart";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";

const TableLine = ({ coin, index }) => {
  const [showChart, setShowChart] = useBoolean(false);

  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id} />
        <p>{++index}</p>
        <div className="img">
          <img src={coin.image} alt="logo" />
        </div>
        <div className="infos">
          <div
            className="chart-img"
            onMouseEnter={() => setShowChart.on()}
            onMouseLeave={() => setShowChart.off()}
          >
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
            <div className="chart-container" id={coin.name}>
              {showChart && <CoinChart coinId={coin.id} coinName={coin.name} />}
            </div>
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={`https://www.coingecko.com/fr/pi%C3%A8ces/${coin.name
              .toLowerCase()
              .replace(/ /g, "-")}`}
          >
            <img src="./assets/info-icon.svg" alt="" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price)}</p>
      <p className="mktcap">{compactFormater(coin.market_cap)}</p>
      <p className="mktcap">{compactFormater(coin.total_volume)}</p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_24h_in_currency} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      {coin.ath_change_percentage > -3 ? (
        <p>ATH !</p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
};

export default TableLine;
