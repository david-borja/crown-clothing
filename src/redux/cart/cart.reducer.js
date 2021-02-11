import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  isHidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_IS_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      }
    default:
      return state
  }
}

export default cartReducer;