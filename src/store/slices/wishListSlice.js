let initialState = [];

//actions performed on wishlist
const WISHLIST_ADD_ITEM = "wishlist/addItem";
const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

export const addItemsToWishList = (productData) => {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: productData,
  };
};

export const removeItemsFromWishList = (productId) => {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId },
  };
};

const wishListReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case WISHLIST_ADD_ITEM: {
      const exists = state.find(
        (item) => item.productId === action.payload.productId
      );
      if (exists) return state;
      return [...state, action.payload]; // store the full product object
    }
    case WISHLIST_REMOVE_ITEM: {
      return state.filter((item) => {
        //since we are only storing productId in the wishList array
        //so we can just remove the id
        return item.productId !== action.payload.productId;
      });
    }

    default: {
      return state;
    }
  }
};

export default wishListReducer;
