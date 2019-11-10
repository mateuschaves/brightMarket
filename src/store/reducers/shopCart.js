import {
  DECREMENT_AMOUNT_PRODUCT,
  INCREMENT_AMOUNT_PRODUCT,
  NEW_PRODUCT,
  REMOVE_PRODUCT,
  SET_TARGET_PRICE,
} from '~/store/actions/shopCart';

import Reactotron from 'reactotron-react-native';

const INITIAL_STATE = {
  products: [],
  price: 0,
  targetPrice: 0,
};

function getTotalCartShop(products = []) {
  return products.reduce(
    (totalCartShop, product) => totalCartShop + product.price * product.amount,
    0,
  );
}

export default function shopCart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_PRODUCT:
      state.products.push(action.payload.product);
      return {
        ...state,
        products: state.products,
        price: getTotalCartShop(state.products),
      };
    case REMOVE_PRODUCT:
      const productsFiltered = state.products.filter(
        product => product.id !== action.id,
      );
      return {
        ...state,
        products: productsFiltered,
        price: getTotalCartShop(state.products),
      };
    case INCREMENT_AMOUNT_PRODUCT:
      const newProductsIncremented = state.products.map(product => {
        if (product.id === action.payload.id) {
          product.amount++;
          Reactotron.log(product);
        }
        return product;
      });
      Reactotron.log({
        ...state,
        products: newProductsIncremented,
        price: getTotalCartShop(state.products),
      });
      return {
        ...state,
        products: newProductsIncremented,
        price: getTotalCartShop(state.products),
      };
    case DECREMENT_AMOUNT_PRODUCT:
      const newProductsDecremented = state.products.map(product => {
        if (product.id === action.payload.id) {
          product.amount--;
        }
        return product;
      });
      return {
        ...state,
        products: newProductsDecremented,
        price: getTotalCartShop(state.products),
      };
    case SET_TARGET_PRICE:
      return {
        ...state,
        targetPrice: action.payload.targetPrice,
      };
    default:
      return state;
  }
}
