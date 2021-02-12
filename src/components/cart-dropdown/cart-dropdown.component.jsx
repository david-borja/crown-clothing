import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  const renderedCartItems = cartItems.map((cartItem) => (
    <CartItem item={cartItem} key={cartItem.id} />
  ));
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {renderedCartItems}
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);