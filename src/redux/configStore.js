import { combineReducers, createStore } from "redux";
import LoadingReducer from "./reducers/LoadingReducer";
import PlayerReducer from "./reducers/PlayerReducer";

const rootReducer = combineReducers({
    LoadingReducer,
    PlayerReducer
})

export const store = createStore(rootReducer)