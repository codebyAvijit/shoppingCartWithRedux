// src/components/WishlistItem.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { removeItemsFromWishList } from "../store/slices/wishListSlice";

export default function WishlistItem({ productId, title, price, imageUrl }) {
  //   console.log(productId, title, price, image);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItemsFromWishList(productId));
  };

  return (
    <div className="wishlist-item">
      <img src={imageUrl} alt={title} width="100" />
      <div>
        <h4>{title}</h4>
        <p>${price}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}
