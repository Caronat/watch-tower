import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStable } from "../redux/stable.slice";
import { onFav, offFav } from "../redux/fav.slice";

const TableFilters = () => {
  const dispatch = useDispatch();
  const showStable = useSelector((state) => state.stable.value);
  const showFavorite = useSelector((state) => state.favorite.value);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
            onChange={() => dispatch(toggleStable())}
          />
          <label htmlFor="stableCoin">{`${
            showStable ? "Sans" : "Avec"
          } stable coin`}</label>
        </div>
        <div
          className={`no-list-btn ${showFavorite ? "" : "active"}`}
          onClick={() => dispatch(offFav())}
        >
          <p>Aucune liste</p>
        </div>
        <div
          className={`fav-list ${showFavorite ? "active" : ""}`}
          onClick={() => dispatch(onFav())}
        >
          <p>liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icon star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
