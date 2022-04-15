import { LOG_IN, LOG_IN_ERROR, LOG_OUT } from "./loginAction";

const initialStore = {
  token: "",
  isAuth: false,
  isError: false,
};

export const LoginReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        token: payload,
        isAuth: true,
        isError: false,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        isError: true,
      };
    case LOG_OUT:
      return {
        ...state,
        token: "",
        isAuth: false,
      };
    default:
      return state;
  }
};
