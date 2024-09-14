export const formatAsKrones = (price: string | number): string => {
  const dkkAmount = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
  }).format(Number(price) / 100);
  return dkkAmount;
};
