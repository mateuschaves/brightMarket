import {NEW_SCREEN} from '../actions/bottomNavigation';

const INITIAL_STATE = {
  screen: 0,
};

export default function bottomNavigation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_SCREEN:
      return {
        ...state,
        screen: action.payload.screen,
      };
    default:
      return state;
  }
}
