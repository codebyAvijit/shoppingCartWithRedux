import { combineReducers, createStore } from "redux";
import productsReducer from "./slices/productsSlice";
import cartItemsReducer from "./slices/cartItemsSlice";
import wishListReducer from "./slices/wishListSlice";

// let initialState = {
//   products: productLists,
//   cartItems: [],
//   wishList: [],
// };

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartItemsReducer,
  wishlist: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store);

//dispatches related to cart items

// console.log(store.dispatch(addItemsToCart(10, 1)));

// store.dispatch(addItemsToCart(10, 1));

// store.dispatch(addItemsToCart(10, 1));

// store.dispatch(addItemsToCart(5, 1));

// store.dispatch(addItemsToCart(5, 1));

// store.dispatch(removeItemsFromCart(10));

// store.dispatch(removeItemsFromCart(2));

// store.dispatch(increaseCartItemQuantity(10));

// store.dispatch(increaseCartItemQuantity(5));

// store.dispatch(decreaseCartItemQuantity(5));

// // console.log(store.getState());

// //dispatches related to wishList items

// store.dispatch(addItemsToWishList(1));

// store.dispatch(addItemsToWishList(5));

// store.dispatch(removeItemsFromWishList(1));
