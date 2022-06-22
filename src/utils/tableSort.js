const tableSort = (coinA, coinB, orderBy, orderReverse) => {
  let res = 0;
  switch (orderBy) {
    case "Prix":
      res = coinB.current_price - coinA.current_price;
      break;
    case "MarketCap":
      res = coinB.market_cap - coinA.market_cap;
      break;
    case "Volume":
      res = coinB.total_volume - coinA.total_volume;
      break;
    case "1h":
      res =
        coinB.price_change_percentage_1h_in_currency -
        coinA.price_change_percentage_1h_in_currency;
      break;
    case "1j":
      res =
        coinB.price_change_percentage_24h_in_currency -
        coinA.price_change_percentage_24h_in_currency;
      break;
    case "1s":
      res =
        coinB.price_change_percentage_7d_in_currency -
        coinA.price_change_percentage_7d_in_currency;
      break;
    case "1m":
      res =
        coinB.price_change_percentage_30d_in_currency -
        coinA.price_change_percentage_30d_in_currency;
      break;
    case "6m":
      res =
        coinB.price_change_percentage_200d_in_currency -
        coinA.price_change_percentage_200d_in_currency;
      break;
    case "1a":
      res =
        coinB.price_change_percentage_1y_in_currency -
        coinA.price_change_percentage_1y_in_currency;
      break;
    case "ATH":
      res = coinB.ath_change_percentage - coinA.ath_change_percentage;
      break;
  }
  if (orderReverse) res *= -1;
  return res;
};

export { tableSort };
