import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { UiReducer } from "./ui";
import { AppReducer } from "./app";

const createRootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        ui: UiReducer,
        app: AppReducer,
    });

export default createRootReducer;
