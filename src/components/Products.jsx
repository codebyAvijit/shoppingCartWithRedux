import { useDispatch } from "react-redux";
import { addItemsToCart } from "../store/slices/cartItemsSlice";
import { addItemsToWishList } from "../store/slices/wishListSlice";
export default function Product({ productId, title, rating, price, imageUrl }) {
  //   console.log(image);
  const dispatch = useDispatch();
  const addTocartHandler = () => {
    return dispatch(
      addItemsToCart({
        productId,
        title,
        rating,
        price,
        imageUrl,
      })
    );
  };

  const addToWishlistHandler = () => {
    // console.log("clicked");
    return dispatch(
      addItemsToWishList({
        productId,
        title,
        rating,
        price,
        imageUrl,
      })
    );
  };
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={addTocartHandler}>Add to Cart</button>
        <button onClick={addToWishlistHandler}>Add To Wishlist</button>
      </div>
    </div>
  );
}
