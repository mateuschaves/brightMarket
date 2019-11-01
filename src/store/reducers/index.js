import {combineReducers} from 'redux';

import scannedProductModal from './scannedProductModal';
import shopCart from './shopCart';

export default combineReducers({
  scannedProductModal,
  shopCart,
});
