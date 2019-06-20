import { TOGGLE_CLOSED, TOGGLE_LOCKED } from './actions';

const initialState = {
  closed: false,
  locked: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_CLOSED:
      return {
        ...state,
        closed: !state.closed,
      }
    case TOGGLE_LOCKED:
      return {
        ...state,
        locked: !state.locked,
      }
    default:
      return state;
  };
}

export default reducer;
