const priceFormater = (num) => {
  const formaterOption = {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 7,
  };
  const formater = Intl.NumberFormat("us", formaterOption);

  return formater.format(num);
};

const compactFormater = (num) => {
  const formaterOption = {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    notation: "compact",
  };
  const formater = Intl.NumberFormat("us", formaterOption);

  return formater.format(num);
};

export { priceFormater, compactFormater };
