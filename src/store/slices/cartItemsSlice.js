import { produce } from "immer";

let originalState = [];

//actions performed on cart
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

//action creators for cart items
//a function that will return an object with type and payload properties

export const addItemsToCart = (productData) => {
  return {
    type: CART_ADD_ITEM,
    payload: productData,
  };
};

export const removeItemsFromCart = (productId) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId: productId },
  };
};

export const increaseCartItemQuantity = (productId) => {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId: productId },
  };
};

export const decreaseCartItemQuantity = (productId) => {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId: productId },
  };
};

//reducer funtion for cart items
const cartItemsReducer = (state = originalState, action) => {
  // console.log(action);
  const existingItemIndex = state.findIndex((singleCartItem) => {
    return singleCartItem.productId === action.payload.productId;
  });

  produce(originalState, (state) => {
    switch (action.type) {
      case CART_ADD_ITEM: {
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1;
          return state;
        }
        state.push({ ...action.payload, quantity: 1 });
      }
      case CART_REMOVE_ITEM: {
        state.splice(existingItemIndex, 1);
        return state;
      }
      case CART_ITEM_INCREASE_QUANTITY: {
        return state.map((singleItem) => {
          if (singleItem.productId === action.payload.productId) {
            return {
              ...singleItem,
              quantity: singleItem.quantity + 1,
            };
          }
          return singleItem;
        });
      }
      case CART_ITEM_DECREASE_QUANTITY: {
        return state
          .map((singleItem) => {
            if (singleItem.productId === action.payload.productId) {
              return {
                ...singleItem,
                quantity: singleItem.quantity - 1,
              };
            }
            return singleItem;
          })
          .filter((singleItem) => {
            return singleItem.quantity > 0;
          });
      }
      default: {
        return state;
      }
    }
  });
};

export default cartItemsReducer;
