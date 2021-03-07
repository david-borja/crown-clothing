import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartIsHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartIconContainer,
  CartShoppingIcon,
  ItemCountSpan,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartIsHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartIsHidden}>
    <CartShoppingIcon />
    <ItemCountSpan>{itemCount}</ItemCountSpan>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartIsHidden: () => dispatch(toggleCartIsHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
