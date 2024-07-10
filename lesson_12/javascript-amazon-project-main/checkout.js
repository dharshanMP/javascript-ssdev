import {
  cart,
  removeFromCart,
  calculateCartQuantity,
  updateQuantity,
} from "./data/cart.js";
import { products } from "./data/products.js";
import { formatCurrency } from "../utiles/money.js";

function renderCart() {
  let cartSummary = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = products.find(
      (product) => product.id === productId
    );

    if (matchingProduct) {
      cartSummary += `
        <div class="cart-item-container js-cart-item-container-${
          matchingProduct.id
        }">
          <div class="delivery-date">Delivery date: Tuesday, June 21</div>

          <div class="cart-item-details-grid">
            <img class="product-image" src="${matchingProduct.image}" />

            <div class="cart-item-details">
              <div class="product-name">${matchingProduct.name}</div>
              <div class="product-price">$${formatCurrency(
                matchingProduct.priceCents
              )}</div>
              <div class="product-quantity">
                <span> Quantity: <span class="quantity-label js-quantity-label-${
                  matchingProduct.id
                }">${cartItem.quantity}</span> </span>
                <span class="update-quantity-link link-primary js-update-link" data-product-id="${
                  matchingProduct.id
                }">Update</span>
                <input class="quantity-input js-quantity-input-${
                  matchingProduct.id
                }" type="number" style="display: none;">
                <span class="save-quantity-link link-primary js-save-link" data-product-id="${
                  matchingProduct.id
                }" style="display: none;">Save</span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                  matchingProduct.id
                }">Delete</span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">Choose a delivery option:</div>
              <div class="delivery-option">
                <input type="radio" checked class="delivery-option-input" name="delivery-option-${
                  matchingProduct.id
                }" />
                <div>
                  <div class="delivery-option-date">Tuesday, June 21</div>
                  <div class="delivery-option-price">FREE Shipping</div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${
                  matchingProduct.id
                }" />
                <div>
                  <div class="delivery-option-date">Wednesday, June 15</div>
                  <div class="delivery-option-price">$4.99 - Shipping</div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${
                  matchingProduct.id
                }" />
                <div>
                  <div class="delivery-option-date">Monday, June 13</div>
                  <div class="delivery-option-price">$9.99 - Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  });

  document.querySelector(".js-order-summary").innerHTML = cartSummary;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      renderCart();
      updateCartQuantity();
    });
  });

  document.querySelectorAll(".js-update-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.querySelector(`.js-quantity-input-${productId}`).style.display =
        "inline-block";
      container.querySelector(`.js-save-link`).style.display = "inline-block";
    });
  });

  document.querySelectorAll(".js-save-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      const quantityInput = document.querySelector(
        `.js-quantity-input-${productId}`
      );
      const newQuantity = Number(quantityInput.value);

      if (newQuantity < 0 || newQuantity >= 1000) {
        alert("Quantity must be at least 0 and less than 1000");
        return;
      }

      updateQuantity(productId, newQuantity);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.querySelector(`.js-quantity-input-${productId}`).style.display =
        "none";
      container.querySelector(`.js-save-link`).style.display = "none";

      const quantityLabel = document.querySelector(
        `.js-quantity-label-${productId}`
      );
      quantityLabel.innerHTML = newQuantity;

      updateCartQuantity();
    });
  });
}

function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();
  document.querySelector(
    ".js-return-to-home-link"
  ).innerHTML = `${cartQuantity} items`;
}

renderCart();
updateCartQuantity();
