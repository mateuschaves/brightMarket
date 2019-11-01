export const NEW_PRODUCT = 'NEW_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INCREMENT_AMOUNT_PRODUCT = 'INCREMENT_AMOUNT_PRODUCT';
export const DECREMENT_AMOUNT_PRODUCT = 'DECREMENT_AMOUNT_PRODUCT';
export const SET_TARGET_PRICE = 'SET_TARGET_PRICE';

export const newProduct = product => ({
  type: NEW_PRODUCT,
  payload: {product},
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: {product},
});

export const incrementAmountProduct = id => ({
  type: INCREMENT_AMOUNT_PRODUCT,
  payload: {id},
});

export const decrementAmountProduct = id => ({
  type: DECREMENT_AMOUNT_PRODUCT,
  payload: {id},
});

export const setTargetPrice = targetPrice => ({
  type: SET_TARGET_PRICE,
  payload: {targetPrice},
});
