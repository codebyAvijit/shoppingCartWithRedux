import React from "react";
import { Link } from "react-router";
import CartIcon from "../assets/cart-icon.svg";
import WishlistIcon from "../assets/wishlist.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist);
  // console.log(wishlistItems);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link to="/wishlist">
          <img
            src={WishlistIcon}
            alt="wishlist-icon"
            style={{ width: "28px", height: "28px", paddingLeft: "629px" }}
          />
          <div className="cart-items-count">{wishlistItems.length}</div>
        </Link>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce((accumulator, currentValue) => {
              /* console.log("acc", acc, "curr", curr); */
              return accumulator + currentValue.quantity;
            }, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
}
