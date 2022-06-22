import React, { useEffect } from "react";
import useBoolean from "../hooks/useBoolean";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useBoolean(false);

  const idChecker = (coinId) => {
    let favList = window.localStorage.coinList?.split(",") || [];

    if (favList.includes(coinId)) {
      window.localStorage.coinList = favList.filter((v) => v !== coinId);
      setLike.off();
    } else {
      window.localStorage.coinList = [...favList, coinId];
      setLike.on();
    }
  };

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList;
      if (favList.includes(coinId)) setLike.on();
    }
  }, []);

  return (
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
};

export default StarIcon;
