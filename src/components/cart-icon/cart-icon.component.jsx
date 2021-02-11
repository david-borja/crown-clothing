import React from "react";
import { connect } from "react-redux";
import { toggleCartIsHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartIsHidden, cartItems }) => (
  <div className="cart-icon" onClick={toggleCartIsHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItems.length}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartIsHidden: () => dispatch(toggleCartIsHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);