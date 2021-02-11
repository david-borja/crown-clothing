import React from "react";
import { connect } from "react-redux";
import { toggleCartIsHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartIsHidden }) => (
  <div className="cart-icon" onClick={toggleCartIsHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartIsHidden: () => dispatch(toggleCartIsHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);