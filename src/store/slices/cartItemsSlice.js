import { produce } from "immer";

const originalState = [];

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
  return produce(state, (draft) => {
    const existingItemIndex = draft.findIndex(
      (item) => item.productId === action.payload?.productId
    );

    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingItemIndex !== -1) {
          draft[existingItemIndex].quantity += 1;
        } else {
          draft.push({ ...action.payload, quantity: 1 });
        }
        break;

      case CART_REMOVE_ITEM:
        if (existingItemIndex !== -1) {
          draft.splice(existingItemIndex, 1);
        }
        break;

      case CART_ITEM_INCREASE_QUANTITY:
        if (existingItemIndex !== -1) {
          draft[existingItemIndex].quantity += 1;
        }
        break;

      case CART_ITEM_DECREASE_QUANTITY:
        if (existingItemIndex !== -1) {
          draft[existingItemIndex].quantity -= 1;
          if (draft[existingItemIndex].quantity <= 0) {
            draft.splice(existingItemIndex, 1);
          }
        }
        break;

      default:
        return state;
    }
  });
};

export default cartItemsReducer;
