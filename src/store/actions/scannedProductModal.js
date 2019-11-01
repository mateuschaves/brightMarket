export const SET_SCANNED_PRODUCT = 'SET_SCANNED_PRODUCT';
export const HIDE_MODAL = 'HIDE_MODAL';

export const setScannedProduct = scannedProduct => ({
  type: SET_SCANNED_PRODUCT,
  payload: {scannedProduct},
});

export const hideModal = hideModal => ({
  type: HIDE_MODAL,
  payload: {hideModal},
});
