import { REDUX_ACTIONS } from "../constants";

const INIT_STATE = {
    is_hide_nav: false,
};

export const UiReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case REDUX_ACTIONS.UI_ACTIONS.SET_MODE: {
            return { ...state, mode: action.payload };
        }
        case REDUX_ACTIONS.UI_ACTIONS.SET_HIDE_NAV: {
            return { ...state, is_hide_nav: action.payload };
        }
        default:
            return state;
    }
};
