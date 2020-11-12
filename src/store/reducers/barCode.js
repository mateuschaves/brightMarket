import { SET_BAR_CODE } from '../actions/barCode';

const INITIAL_STATE = {
    barCode: null,
};

export default function bottomNavigation(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_BAR_CODE:
            return {
                ...state,
                barCode: action.payload.barCode,
            };
        default:
            return state;
    }
}
