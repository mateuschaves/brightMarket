import { combineReducers } from 'redux';

import scannedProductModal from './scannedProductModal';
import shopCart from './shopCart';
import bottomNavigation from './bottomNavigation';
import productNotRegisteredModal from './productNotRegisteredModal';
import barCode from './barCode';

export default combineReducers({
  scannedProductModal,
  shopCart,
  bottomNavigation,
  productNotRegisteredModal,
  barCode
});
