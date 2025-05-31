import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeItemsFromCart,
} from "../store/slices/cartItemsSlice";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();

  const decreaseQuantityHandler = () => {
    dispatch(decreaseCartItemQuantity(productId));
  };

  const increaseQuantityHandler = () => {
    dispatch(increaseCartItemQuantity(productId));
  };

  const removeItemHandler = () => {
    dispatch(removeItemsFromCart(productId));
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={decreaseQuantityHandler}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantityHandler}>+</button>
        <button onClick={removeItemHandler}>Remove</button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
