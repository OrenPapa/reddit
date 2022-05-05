import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers/CombineReducers";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

