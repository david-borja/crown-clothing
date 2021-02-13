import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartIsHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const renderedCartItems = cartItems.map((cartItem) => (
    <CartItem item={cartItem} key={cartItem.id} />
  ));

  const emptyMessage = (
    <span className="empty-message">Your cart is empty</span>
  );

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? renderedCartItems : emptyMessage}
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartIsHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));