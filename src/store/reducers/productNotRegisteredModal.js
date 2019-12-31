import { HIDE_PRODUCT_NOT_REGISTERED_MODAL, SHOW_PRODUCT_NOT_REGISTERED_MODAL } from '../actions/productNotRegisteredModal';

const INITIAL_STATE = {
    productNotRegisteredModalVisible: false
};

export default function productNotRegisteredModal(state = INITIAL_STATE, action) {
    switch (action.type) {
        case HIDE_PRODUCT_NOT_REGISTERED_MODAL:
            return {
                ...state,
                productNotRegisteredModalVisible: false,
            };
        case SHOW_PRODUCT_NOT_REGISTERED_MODAL:
            return {
                ...state,
                productNotRegisteredModalVisible: true,
            };
        default:
            return state;
    }
}
