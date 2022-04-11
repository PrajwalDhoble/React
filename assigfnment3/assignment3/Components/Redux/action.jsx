export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";

export const login = (payload) => ({ type: LOG_IN, payload });

export const signup = (payload) => ({ type: SIGN_UP, payload });
