export const SET_SELECTED_CAR = "SET_SELECTED_CAR";
export const SET_SELECTED_PRICE_RANG = "SET_SELECTED_PRICE_RANG";

export const selectedAction = (brand) => ({
  type: SET_SELECTED_CAR,
  payload: brand,
});

export const selectedPriceAction = (priceRang) => ({
  type: SET_SELECTED_PRICE_RANG,
  payload: priceRang,
});
