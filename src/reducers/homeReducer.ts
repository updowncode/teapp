import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import initialState from '../store/initialState';

export const homeReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.MENUITEMS:
      const newState = Object.assign({}, state, {
        menuItems: [...state.menuItems, ...action.payload],
      });
      return newState;
    default:
      return state;
  }
};
