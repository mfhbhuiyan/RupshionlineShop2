import {ADD_TO_CART,REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO} from '../constants/cartConstants';
import axios from "axios";

//ADD TO CART

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {

      const {data} = await axios.get(`/app/vi/product/${id}`);

dispatch({
    type: ADD_TO_CART,
    payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
        },

}); 

localStorage.setItem("cart",JSON.stringify(getState().cart.cartItems));

};

//REMOVE FROM CART


export const removeItemsFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type:REMOVE_CART_ITEM,
        payload: id,
    });

    localStorage.setItem("cart",JSON.stringify(getState().cart.cartItems));
    
};

//SAVE_SHIPPING_INFO 


export const saveShippingInfo = (data) => (dispatch, getState) => {
    dispatch({
        type:SAVE_SHIPPING_INFO,
        payload: data,
    });

    localStorage.setItem("shippingInfo",JSON.stringify(data));
    
};
