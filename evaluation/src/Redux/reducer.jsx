import { ADD_CITY } from "./action";

export const reducer = (store, { type, payload }) => {
  console.log("redux store", store.city);
  switch (type) {
    case ADD_CITY:
      return { ...store, city: payload };
    default:
      return store;
  }
};