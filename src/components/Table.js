import React, { useState } from "react";
import useBoolean from "../hooks/useBoolean";
import TableLine from "./TableLine";
import { useSelector } from "react-redux";
import ToTop from "./ToTop";
import { tableSort } from "../utils/tableSort";
import { tableHeader, stablesCoinsList } from "../data/data";

const Table = ({ coinsData }) => {
  const [rangeValue, setRangeValue] = useState(100);
  const [orderBy, setOrderBy] = useState("orderBy");
  const [orderReverse, setOrderReverse] = useBoolean(false);
  const showStable = useSelector((state) => state.stable.value);
  const showFavorite = useSelector((state) => state.favorite.value);

  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            Top{" "}
            <input
              type="text"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </span>
          <input
            type="range"
            min={1}
            max={250}
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
          <ToTop />
        </div>
        {tableHeader.map((lib) => (
          <li key={lib}>
            <input
              type="radio"
              name="header-lib"
              id={lib}
              defaultChecked={orderBy.startsWith(lib)}
              onClick={() => {
                if (orderBy === lib) {
                  setOrderReverse.toggle();
                } else {
                  setOrderReverse.off();
                  setOrderBy(lib);
                }
              }}
            />
            <label htmlFor={lib}>{lib}</label>
          </li>
        ))}
      </ul>
      {coinsData
        ?.slice(0, rangeValue)
        .filter(
          (coin) =>
            !showFavorite || window.localStorage.coinList.includes(coin.id)
        )
        .filter((coin) => showStable || !stablesCoinsList.includes(coin.symbol))
        .sort((a, b) => tableSort(a, b, orderBy, orderReverse))
        .map((coin, index) => (
          <TableLine key={index} coin={coin} index={index} />
        ))}
    </div>
  );
};

export default Table;
