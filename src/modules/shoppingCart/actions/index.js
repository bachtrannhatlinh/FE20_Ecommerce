import * as ActionTypes from '../constants/actionTypes';

export const addToCart = (product , quantity) =>({
    type : ActionTypes.ADD_PRODUCT_TO_CART,
    product : product,
    quantity : quantity,
});

export const deleteProduct = (id) => ({
    type: ActionTypes.DELETE_PRODUCT,
    id: id
})
