import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.cart.cartItems;

// Count number of products in cart
export const cartItemsCountSelector = createSelector(
    cartItemSelector,
    (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Calcu total of cart
export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
