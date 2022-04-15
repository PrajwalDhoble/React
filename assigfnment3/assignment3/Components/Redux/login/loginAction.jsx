export const LOG_IN = "LOG_IN";
export const LOG_IN_ERROR = "LOG_IN_ERROR";
export const LOG_OUT = "LOG_OUT";

export const loginSuccess = (payload) => ({ type: LOG_IN, payload });

export const loginError = () => ({ type: LOG_IN_ERROR });

export const logoutSuccess = () => ({ type: LOG_OUT });
