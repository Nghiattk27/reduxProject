import fakestoreapi from "../../../apis/fakeStoreAPI";
import { ActionTypes } from "../contants/actionType";

export const fetchProducts = () =>
    async (dispatch) => {
        const response = await fakestoreapi.get("/products");
        dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
    }

export const fetchProductDetail = (id) =>
    async (dispatch) => {
        const response = await fakestoreapi.get(`/products/${id}`);
        dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
    }

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const seletedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}