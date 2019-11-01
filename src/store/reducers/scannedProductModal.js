import {HIDE_MODAL, SET_SCANNED_PRODUCT} from '../actions/scannedProductModal';

const INITIAL_STATE = {
  scannedProduct: {
    name: undefined,
    brand: undefined,
    price: undefined,
    category: undefined,
    amount: undefined,
  },
  modalVisible: false,
};

export default function scannedProductModal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SCANNED_PRODUCT:
      return {
        ...state,
        scannedProduct: action.payload.scannedProduct,
        modalVisible: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modalVisible: false,
      };
    default:
      return state;
  }
}
