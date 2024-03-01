const conversionRates = {
  CA: 1,
  US: 0.8,
};
export const convertPrice = (price, countryCode) => {
  const conversionRate = conversionRates[countryCode] || 1;
  return price * conversionRate;
};
