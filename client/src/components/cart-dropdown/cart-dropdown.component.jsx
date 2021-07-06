import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartIsHidden } from "../../redux/cart/cart.actions";

import {
  EmptyMessageSpan,
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const renderedCartItems = cartItems.map((cartItem) => (
    <CartItem item={cartItem} key={cartItem.id} />
  ));

  const emptyMessage = <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>;

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? renderedCartItems : emptyMessage}
        <CartDropdownButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartIsHidden());
          }}
        >
          GO TO CHECKOUT
        </CartDropdownButton>
      </CartItemsContainer>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
