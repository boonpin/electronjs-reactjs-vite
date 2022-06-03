import { REDUX_ACTIONS } from "../constants";

const INIT_STATE = {
    auth: null,
    time: null,
};

export const AppReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case REDUX_ACTIONS.USER_ACTIONS.SET: {
            return { ...state, auth: action.payload };
        }
        case REDUX_ACTIONS.USER_ACTIONS.UNSET: {
            return { ...state, auth: null };
        }
        case REDUX_ACTIONS.SETTING_ACTIONS.SET: {
            return { ...state, settings: action.payload };
        }
        case REDUX_ACTIONS.SETTING_ACTIONS.UNSET: {
            return { ...state, settings: null };
        }
        case REDUX_ACTIONS.LICENSE_ACTIONS.SET: {
            return { ...state, license: action.payload };
        }
        case REDUX_ACTIONS.TIME_ACTIONS.SET: {
            return { ...state, time: action.payload };
        }
        case REDUX_ACTIONS.SYSID_ACTIONS.SET: {
            return { ...state, sysid: action.payload };
        }
        default:
            return state;
    }
};
