export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    },
  ];
}

function tostorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addtocart(productId) {
  let matchingcartItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingcartItem = cartItem;
    }
  });
  if (matchingcartItem) {
    matchingcartItem.quantity += 1;
  } else {
    cart.push({
      ProductId: productId,
      quantity: 1,
    });
  }
  tostorage();
}

export function remove_from_cart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  tostorage();
}
