import {combineReducers} from 'redux';

import scannedProductModal from './scannedProductModal';
import shopCart from './shopCart';
import bottomNavigation from './bottomNavigation';

export default combineReducers({
  scannedProductModal,
  shopCart,
  bottomNavigation,
});
