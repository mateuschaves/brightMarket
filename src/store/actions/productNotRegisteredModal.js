export const SHOW_PRODUCT_NOT_REGISTERED_MODAL = 'SHOW_PRODUCT_NOT_REGISTERED_MODAL';
export const HIDE_PRODUCT_NOT_REGISTERED_MODAL = 'HIDE_PRODUCT_NOT_REGISTERED_MODAL';

export const showProductNotRegisteredModal = () => ({
    type: SHOW_PRODUCT_NOT_REGISTERED_MODAL
});

export const hideProductNotRegisteredModal = _ => ({
    type: HIDE_PRODUCT_NOT_REGISTERED_MODAL
});
