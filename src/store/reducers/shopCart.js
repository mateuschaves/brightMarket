const INITIAL_STATE = {
  products: [],
  price: undefined,
  targetPrice: undefined,
};

function getTotalCartShop(products = []) {
  return products.reduce(
    (totalCartShop, product) => totalCartShop + product.price * product.amount,
    0,
  );
}

export default function shopCart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_PRODUCT':
      state.products.push(action.payload.product);
      return {
        ...state,
        product: state.products,
        price: getTotalCartShop(state.products),
      };
    case 'REMOVE_PRODUCT':
      const productsFiltered = state.products.filter(
        product => product.id !== action.id,
      );
      return {
        ...state,
        products: productsFiltered,
        price: getTotalCartShop(state.products),
      };
    case 'INCREMENT_AMOUNT_PRODUCT':
      const newProducts = state.products.map(product => {
        if (product.id === action.payload.id) {
          product.amount++;
        }
        return product;
      });
      return {
        ...state,
        products: newProducts,
        price: getTotalCartShop(state.products),
      };
    case 'DECREMENT_AMOUNT_PRODUCT':
      const newProducts = state.products.map(product => {
        if (product.id === action.payload.id) {
          product.amount--;
        }
        return product;
      });
      return {
        ...state,
        products: newProducts,
        price: getTotalCartShop(state.products),
      };
    case 'SET_TARGET_PRICE':
      return {
        ...state,
        targetPrice: action.payload.targetPrice,
      };
    default:
      return state;
  }
}
