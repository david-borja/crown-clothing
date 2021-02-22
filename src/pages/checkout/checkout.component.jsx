import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckOutPageContainer,
  CheckOutHeader,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
  CheckOutButton
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => {
  const renderedCheckoutItems = cartItems.map((cartItem) => (
    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  ));
  return (
    <CheckOutPageContainer>
      <CheckOutHeader>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckOutHeader>
      {renderedCheckoutItems}
      <TotalContainer>
        <div>TOTAL: ${total}</div>
        <TestWarningContainer>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </TestWarningContainer>
      </TotalContainer>
      <CheckOutButton price={total} />
    </CheckOutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
