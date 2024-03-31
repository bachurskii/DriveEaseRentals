export const addFavorite = (car) => ({
  type: "ADD_FAVORITE",
  payload: car,
});

export const removeFavorite = (carId) => ({
  type: "REMOVE_FAVORITE",
  payload: carId,
});
export const setFavorites = (cars) => ({
  type: "SET_FAVORITES",
  payload: cars,
});
