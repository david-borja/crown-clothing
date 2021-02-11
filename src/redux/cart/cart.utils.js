export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: ++cartItem.quantity }
        : cartItem // if the item doesn't match, we just return the item because there is no need to update
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
