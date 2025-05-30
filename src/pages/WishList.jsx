// src/pages/Wishlist.jsx
import React from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../components/WishListItem";

export default function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist);

  if (wishlistItems.length === 0) {
    return <h2>Your wishlist is empty ❤️</h2>;
  }

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlistItems.map((item) => (
        <WishlistItem key={item.productId} {...item} />
      ))}
    </div>
  );
}
