export const SET_BAR_CODE = 'SET_BAR_CODE';

export const setBarCode = barCode => ({
    type: SET_BAR_CODE,
    payload: { barCode },
});
