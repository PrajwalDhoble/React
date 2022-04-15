import { createStore, combineReducers } from "redux";
import { LoginReducer } from "./Login/loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({ login: LoginReducer });

export const store = createStore(rootReducer, composeWithDevTools());
