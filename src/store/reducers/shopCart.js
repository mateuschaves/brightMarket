import {
  DECREMENT_AMOUNT_PRODUCT,
  INCREMENT_AMOUNT_PRODUCT,
  NEW_PRODUCT,
  REMOVE_PRODUCT,
  SET_TARGET_PRICE,
} from '~/store/actions/shopCart';

import Reactotron from 'reactotron-react-native';

const INITIAL_STATE = {
  products: [{
    name: 'Macarrão Talharim',
    price: 2.30,
    brand: 'Vitarela',
    category: 'Massa',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfG7LFgLX1rWYN2sK6xv2FW5UNp6IIjFtXKOKm94EcDOX83zt-',
    id: 1,
  },
  {
    name: 'Feijão Carioca',
    price: 5.10,
    brand: 'Turquesa',
    category: 'Grão',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlhRhuVNt2sY4omRSy6ZwBnDsoJL5o0tc-YPF1oLBxonI0qU63',
    id: 2,
  },
  {
    name: 'Arroz Parborizado',
    price: 3.30,
    brand: 'Emoções',
    category: 'Grão',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShUHgoSY7hXUiuAeoixUBi0_KuW1krNMwAqVs5uTN6z8CJ3ah_',
    id: 3,
  },
  {
    name: 'Macarrão Instantâneo',
    price: 1.09,
    brand: 'Nissin Lámen',
    category: 'Massa',
    image: 'https://img.sitemercado.com.br/produtos/ed7496b0cd79d5ea7299f916468c7e2be2e54a2232deaa90038e5f940955772c_full.jpg',
    id: 4,
  },{
    name: 'Leite em Pó Integral',
    price: 3.59,
    brand: 'Camponesa',
    category: '',
    image: 'https://img.sitemercado.com.br/produtos/d1d88c9b6efa477901a8a87a8e32a200c412ee186fa0fa88b86195d33ad7c660_full.jpg',
    id: 5,
  }],
  price: 15.38,
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
