export const cart = [];

export function addToCart(productId, selectQuantity) {
  
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  })

  if (matchingItem) {
    matchingItem.quantity += selectQuantity;

  } else {
    cart.push({
      productId: productId,
      quantity: selectQuantity
    })
  }
};